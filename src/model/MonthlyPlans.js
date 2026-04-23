export const MONTHLY_PLANS = {
  bike: [
    {
      id: 'bm_basic',
      name: 'Bike Basic',
      price: 149,
      originalPrice: 198,
      visits: 2,
      tag: null,
      includes: [{ serviceId: 'fb', count: 2 }],
      description: [
        '2 Full bike washes per month',
        'Regular cleaning & maintenance',
        'Best for daily commuters',
      ],
    },
    {
      id: 'bm_plus',
      name: 'Bike Plus',
      price: 249,
      originalPrice: 298,
      visits: 3,
      tag: 'Popular',
      includes: [
        { serviceId: 'fb', count: 2 },
        { serviceId: 'pb', count: 1 },
      ],
      description: [
        '2 Full washes + 1 Premium wash',
        'Includes polish & shine',
        'Better protection & finish',
      ],
    },
  ],

  car: [
    {
      id: 'cm_basic',
      name: 'Basic Care',
      price: 249,
      originalPrice: 318,
      visits: 2,
      tag: 'Save 20%',
      includes: [{ serviceId: 'es', count: 2 }],
      description: [
        '2 Essential washes per month',
        'Exterior + interior basic cleaning',
        'Ideal for weekly upkeep',
      ],
    },
    {
      id: 'cm_plus',
      name: 'Plus Care',
      price: 399,
      originalPrice: 477,
      visits: 3,
      tag: 'Popular',
      includes: [
        { serviceId: 'es', count: 2 },
        { serviceId: 'pw', count: 1 },
      ],
      description: [
        '2 Essential + 1 Premium wash',
        'Interior cleaning & polish included',
        'Balanced care & value',
      ],
    },
    {
      id: 'cm_pro',
      name: 'Pro Care',
      price: 699,
      originalPrice: 917,
      visits: 4,
      tag: 'Best value',
      includes: [
        { serviceId: 'es', count: 2 },
        { serviceId: 'pw', count: 1 },
        { serviceId: 'dw', count: 1 },
      ],
      description: [
        'Complete monthly detailing package',
        'Includes deep cleaning & protection',
        'Best for long-term car maintenance',
      ],
    },
  ],
};