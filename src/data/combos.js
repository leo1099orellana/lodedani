// savings: lo que se ahorra, se muestra como etiqueta junto al precio. detail: texto opcional.
// photos: una o dos fotos que se muestran lado a lado en la tarjeta del combo.
// imageClass ajusta el recorte de la foto. empanadas-3-bandeja muestra la cantidad exacta del combo.

export const combos = [
  {
    id: 'muzza-empanadas',
    name: 'Muzza + 6 empanadas',
    savings: '$3.000',
    price: '$23.000',
    photos: [{ photo: 'pizza-muzzarella', imageClass: 'object-[50%_70%]' }, { photo: 'empanadas', imageClass: 'object-[50%_90%] flex-[2]! md:flex-1!' }],
  },
  {
    id: 'napolitana-muzza',
    name: 'Napolitana + muzza',
    savings: '$3.000',
    price: '$26.000',
    photos: [{ photo: 'napolitana' }, { photo: 'pizza-muzzarella', imageClass: 'object-[50%_70%]' }],
  },
  {
    id: 'cheeseburgers',
    name: '2 cheeseburgers dobles',
    detail: 'Con fritas',
    price: '$20.000',
    photos: [
      { photo: 'cheeseburger', imageClass: 'object-[15%_50%]' },
      { photo: 'cheeseburger', imageClass: 'object-[15%_50%]' },
    ],
  },
  {
    id: 'empanadas-jamon',
    name: '3 empanadas + pizza de jamón',
    detail: 'Para dos',
    price: '$21.000',
    photos: [{ photo: 'empanadas-3-bandeja' }, { photo: 'pizza-jamon', imageClass: 'object-right' }],
  },
  {
    id: 'combinada-muzza',
    name: 'Combinada + muzza',
    detail: 'Combinada: mitad napolitana, mitad especial',
    price: '$27.000',
    photos: [{ photo: 'pizza-combinada' }, { photo: 'pizza-muzzarella', imageClass: 'object-[50%_70%]' }],
  },
  {
    id: 'dos-muzzas',
    name: '2 muzzas',
    savings: '$4.000',
    price: '$22.000',
    photos: [
      { photo: 'pizza-muzzarella', imageClass: 'object-[50%_70%]' },
      { photo: 'pizza-muzzarella', imageClass: 'object-[50%_70%]' },
    ],
  },
];
