import Product from "../types/products";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

type FilterableProductTableProps = {
  products: Product[];
}

export default function FilterableProductTable({
  products,
} : FilterableProductTableProps) {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  )
}