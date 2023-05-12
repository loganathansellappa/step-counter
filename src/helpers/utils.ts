export const isPositiveNumber = (value: any): boolean => {
  return !isNaN(value) && value > 0 && typeof value !== 'string';
};
