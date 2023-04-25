import Product from "../types/products";

import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

import selectProducts from "../utils/selectProducts";

type ProductsInCategoryProps = {
	category: string;
	products: Product[];
}

export default function ProductsInCategory( {
  category, products
}: ProductsInCategoryProps) {
	const productsInCategory = selectProducts(products, category);
	return (
		<>
			<ProductCategoryRow category={category} />
			{productsInCategory.map((product) => (
				<ProductRow key={product.name} product={product} />
			))}
		</>
	)
}
