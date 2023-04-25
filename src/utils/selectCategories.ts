import Product from "../types/products";


export default function selectCategories(products: Product[]): string[] {
  return products.reduce( (acc: string[], product: Product) => {
    const { category } = product;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}