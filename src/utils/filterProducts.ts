import Product from "../types/products";

type FilterConditions = {
  filterText: string;
  inStockOnly: boolean;
}

function textNormalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filterProducts(
  products: Product[],
  { filterText, inStockOnly }: FilterConditions
): Product[] {

  const filteredProducts = products.filter(product => !inStockOnly || product.stocked);

  const query = textNormalize(filterText);

  if(!query) {
    return filteredProducts;
  }

  const contains = (product: Product) => textNormalize(product.name).includes(query);

  return filteredProducts.filter(contains);
}