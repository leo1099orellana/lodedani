// La carta completa de Lo de Dani, organizada por categoría para el acordeón de la pizarra.
// price: string ya formateado. Usar "/" para variantes (ej. "chico / grande").

export const menu = [
  {
    id: 'pizzas',
    title: 'Pizzas',
    note: '',
    items: [
      { name: 'Muzzarella', price: '$13.000' },
      { name: 'Calabresa', price: '$15.000' },
      { name: 'Roquefort', price: '$15.000' },
      { name: 'Jamón', price: '$15.000' },
      { name: 'Huevo', price: '$15.000' },
      { name: 'Napolitana', price: '$16.000' },
      { name: 'Fugazzeta', price: '$16.000' },
      { name: 'Especialidad de la casa', price: '$16.500' },
      { name: 'Especial', price: '$17.000' },
      { name: 'Jamón y tomate', price: '$17.000' },
      { name: 'Jamón, morrón y huevo', price: '$19.000' },
    ],
  },
  {
    id: 'empanadas',
    title: 'Empanadas',
    note: 'Jamón y queso · humita · verdura · carne · pollo',
    items: [{ name: '½ docena / docena', price: '$13.000 / $25.000' }],
  },
  {
    id: 'tartas',
    title: 'Tartas',
    note: 'Media / entera',
    items: [
      { name: 'Jamón, queso y huevo', price: '$13.000 / $25.000' },
      { name: 'Verdura, queso y huevo', price: '$13.000 / $25.000' },
      { name: 'Jamón, queso, huevo y tomate', price: '$14.000 / $26.000' },
      { name: 'Individual (zapallitos, acelga o calabaza)', price: '$6.000' },
    ],
  },
  {
    id: 'milanesas',
    title: 'Milanesas',
    note: 'Común / grande',
    items: [
      { name: 'Sola', price: '$17.000 / $24.000' },
      { name: 'A caballo', price: '$18.000 / $28.000' },
      { name: 'Napolitana', price: '$20.000 / $30.000' },
      { name: 'Napolitana con huevo', price: '$22.000 / $32.000' },
      { name: 'Jamón y queso', price: '$20.000' },
      { name: 'Napolitana con morrón', price: '$21.000' },
      { name: 'Cheddar, panceta y verdeo', price: '$20.000' },
      { name: 'Muzzarella, panceta y verdeo', price: '$20.000' },
    ],
  },
  {
    id: 'sandwich-milanesa',
    title: 'Sándwich de milanesa',
    note: 'Con papas, chico / grande',
    items: [
      { name: 'Lechuga y tomate', price: '$9.000 / $17.000' },
      { name: 'Lechuga, tomate, jamón y queso', price: '$10.000 / $18.000' },
      { name: 'Lechuga, tomate, jamón, queso y huevo', price: '$11.000 / $20.000' },
      { name: 'Napolitano', price: '$11.000 / $20.000' },
    ],
  },
  {
    id: 'suprema',
    title: 'Suprema',
    note: 'Con guarnición',
    items: [
      { name: 'Sola', price: '$10.000' },
      { name: 'A caballo', price: '$11.000' },
      { name: 'Napolitana', price: '$12.000' },
    ],
  },
  {
    id: 'hamburguesas',
    title: 'Hamburguesas',
    note: '',
    items: [
      { name: 'Lechuga y tomate', price: '$8.000' },
      { name: 'Lechuga, tomate, jamón y queso', price: '$8.500' },
      { name: 'Lechuga, tomate, jamón, queso y huevo', price: '$9.000' },
      { name: 'Cheddar y panceta', price: '$9.000' },
      { name: 'Adicional de carne', price: '$3.000' },
    ],
  },
  {
    id: 'pollo',
    title: 'Pollo al horno',
    note: 'Con guarnición',
    items: [
      { name: 'Pollo entero', price: '[Precio]' },
      { name: 'Pata y muslo', price: '$15.000' },
    ],
  },
  {
    id: 'platos',
    title: 'Platos',
    note: 'Con fritas, puré o ensalada',
    items: [
      { name: 'Milanesa de merluza', price: '$10.000' },
      { name: 'Bife de cerdo', price: '$13.000' },
      { name: 'Pollo a la plancha', price: '$15.000' },
    ],
  },
  {
    id: 'tortilla',
    title: 'Tortilla de papas',
    note: '',
    items: [
      { name: 'Clásica', price: '$15.000' },
      { name: 'Rellena con jamón y queso', price: '$18.000' },
    ],
  },
  {
    id: 'papas',
    title: 'Papas',
    note: 'Chica / mediana / grande',
    items: [
      { name: 'Simples', price: '$6.000 / $8.000 / $9.000' },
      { name: 'Con cheddar', price: '$8.000 / $10.000 / $11.000' },
      { name: 'Completas', price: '$9.000 / $11.000 / $12.000' },
      { name: 'Papas con huevo (porción)', price: '$7.000' },
    ],
  },
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    note: 'Chica / mediana / grande',
    items: [{ name: 'Ensalada', price: '$3.500 / $4.000 / $4.500' }],
  },
  {
    id: 'adicionales',
    title: 'Adicionales',
    note: '',
    items: [
      { name: 'Cheddar', price: '$3.000' },
      { name: 'Cheddar, panceta y verdeo', price: '$4.000' },
    ],
  },
];
