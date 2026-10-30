// photos: una o dos fotos que se muestran lado a lado en la tarjeta del combo.
// imageClass ajusta el recorte de la foto. empanadas-3 y empanadas-6 muestran la cantidad exacta del combo.

export const combos = [
  {
    id: 'muzza-empanadas',
    name: 'Muzza + 6 empanadas',
    detail: 'Ahorrás $3.000',
    price: '$23.000',
    photos: [{ photo: 'pizza-muzzarella', imageClass: 'object-[50%_70%]' }, { photo: 'empanadas-6' }],
  },
  {
    id: 'napolitana-muzza',
    name: 'Napolitana + muzza',
    detail: 'Ahorrás $3.000',
    price: '$26.000',
    photos: [{ photo: 'napolitana' }, { photo: 'pizza-muzzarella', imageClass: 'object-[50%_70%]' }],
  },
  {
    id: 'cheeseburgers',
    name: '2 cheeseburgers dobles',
    detail: 'Con fritas',
    price: '$20.000',
    photos: [
      { photo: 'hamburguesa', imageClass: 'object-[50%_25%]' },
      { photo: 'hamburguesa', imageClass: 'object-[50%_25%]' },
    ],
  },
  {
    id: 'empanadas-jamon',
    name: '3 empanadas + pizza especial',
    detail: 'Para dos',
    price: '$21.000',
    photos: [{ photo: 'empanadas-3' }, { photo: 'pizza-jamon-morron' }],
  },
];
