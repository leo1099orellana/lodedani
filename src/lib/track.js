import { site } from '../data/site.js';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];
let initialized = false;

function readUtms() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) {
      utms[key] = value;
      sessionStorage.setItem(key, value);
    } else {
      const stored = sessionStorage.getItem(key);
      if (stored) utms[key] = stored;
    }
  });
  return utms;
}

function loadScript(src, attrs = {}) {
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value));
  document.head.appendChild(script);
  return script;
}

/**
 * Carga GA4 y Meta Pixel solo si hay IDs configurados en site.js.
 * Se ejecuta después del evento load para no bloquear el render inicial.
 */
export function initTracking() {
  if (typeof window === 'undefined' || initialized) return;
  initialized = true;

  const start = () => {
    const { ga4Id, metaPixelId } = site.tracking;

    if (ga4Id) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', ga4Id, { send_page_view: true });
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`);
    }

    if (metaPixelId) {
      window.fbq = function fbq() {
        (window.fbq.queue = window.fbq.queue || []).push(arguments);
      };
      window.fbq('init', metaPixelId);
      window.fbq('track', 'PageView');
      loadScript('https://connect.facebook.net/en_US/fbevents.js');
    }
  };

  if (document.readyState === 'complete') {
    start();
  } else {
    window.addEventListener('load', start, { once: true });
  }
}

/**
 * Dispara un evento a GA4 y Meta Pixel (si están cargados), agregando
 * los parámetros UTM de la sesión actual.
 */
export function track(event, params = {}) {
  if (typeof window === 'undefined') return;
  const payload = { ...params, ...readUtms() };

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, payload);
  }
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', event, payload);
  }
}
