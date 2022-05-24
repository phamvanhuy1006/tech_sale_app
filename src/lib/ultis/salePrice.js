export const salePrice = (price, sale) => {
  return Math.round((Number(price) * Number(sale)) / 100);
};
