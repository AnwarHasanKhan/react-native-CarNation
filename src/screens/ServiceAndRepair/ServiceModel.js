export const SERVICES = [
  {
    id: 'basic',
    name: 'Basic Service',
    desc: 'Oil change · filter · fluid top-up',
    price: 999,
    duration: '~3 hrs',
    badge: null,
  },
  {
    id: 'standard',
    name: 'Standard Service',
    desc: 'Basic + brake check · AC · battery',
    price: 2499,
    duration: '~5 hrs',
    badge: 'Popular',
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Service',
    desc: 'Full inspection · all fluids · detailing',
    price: 4999,
    duration: '~8 hrs',
    badge: null,
  },
  {
    id: 'repair',
    name: 'Specific Repair',
    desc: 'Describe your issue · get a quote',
    price: null,
    duration: 'Varies',
    badge: null,
  },
];

export const DAYS = ['Today', 'Tomorrow', 'Sat 19', 'Sun 20', 'Mon 21'];
export const TIME_SLOTS = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];