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

// Eventos que además se mandan a Meta como el evento estándar Contact,
// para poder optimizar los anuncios a conversaciones de WhatsApp.
const META_CONTACT_EVENTS = ['click_whatsapp', 'submit_pedido'];

/**
 * Carga GA4 solo si hay un ID configurado en site.js.
 * Se ejecuta después del evento load para no bloquear el render inicial.
 * El Meta Pixel no se carga acá: va con el código oficial en index.html.
 */
export function initTracking() {
  if (typeof window === 'undefined' || initialized) return;
  initialized = true;

  const start = () => {
    const { ga4Id } = site.tracking;

    if (ga4Id) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', ga4Id, { send_page_view: true });
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`);
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
    if (META_CONTACT_EVENTS.includes(event)) window.fbq('track', 'Contact', payload);
  }
}
