import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

interface ProductTableProps {
  products: Product[];
  inStockOnly: boolean;
  filterText: string;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  inStockOnly,
  filterText,
}) => {
  const rows: JSX.Element[] = [];
  let lastCategory: string = "";
  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(filterText.toLocaleLowerCase()) == -1
    ) {
      return;
    }
    if (!product.stocked && inStockOnly) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    rows.push(<ProductRow key={product.name} product={product}></ProductRow>);
    lastCategory = product.category;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
