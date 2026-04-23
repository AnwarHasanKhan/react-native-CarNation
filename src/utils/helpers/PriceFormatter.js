export const formatPrice = price =>
  price ? '₹' + price.toLocaleString('en-IN') : 'Custom';
