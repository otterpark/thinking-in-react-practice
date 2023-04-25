import Product from "../types/products";

export default function selectProducts(
  itmes: Product[],
  category: string
): Product[] {
  return itmes.filter((item) => item.category === category);
}