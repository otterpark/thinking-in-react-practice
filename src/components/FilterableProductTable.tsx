import { useState } from "react";
import Product from "../types/products";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import filterProducts from "../utils/filterProducts";

type FilterableProductTableProps = {
  products: Product[];
}

export default function FilterableProductTable({
  products,
} : FilterableProductTableProps) {
  const [inStockOnly, setinStockOnly] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>('');

  const filteredProducts = filterProducts(products, { filterText, inStockOnly });

  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        inStockOnly={inStockOnly}
        setinStockOnly={setinStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </>
  )
}