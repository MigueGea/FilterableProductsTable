import { useState } from "react";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

interface FilterableProductTableProps {
  products: Product[];
}

export const FilterableProductTable: React.FC<FilterableProductTableProps> = ({
  products,
}) => {
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>("");

  return (
    <div>
      <SearchBar
        inStockOnly={inStockOnly}
        filterText={filterText}
        setInStockOnly={setInStockOnly}
        setFilterText={setFilterText}
      />
      <ProductTable
        inStockOnly={inStockOnly}
        filterText={filterText}
        products={products}
      />
    </div>
  );
};
