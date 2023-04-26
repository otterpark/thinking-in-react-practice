import TextField from "./TextField";
import CheckBoxField from "./CheckBoxField";

type SeacrhBarProps = {
  filterText: string;
  inStockOnly: boolean;
  setFilterText: (value: string) => void
  setinStockOnly: (value: boolean) => void;
}

export default function SearchBar({
  filterText, inStockOnly, setFilterText, setinStockOnly
}: SeacrhBarProps){
  return (
    <div className="search-bar">
      <TextField
        placeholder="search..."
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <CheckBoxField
        label="Only show products in stock"
        inStockOnly={inStockOnly}
        setinStockOnly={setinStockOnly}
      />
    </div>
  )
}