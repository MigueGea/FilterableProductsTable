interface ProductCategoryRowProps {
  category: string;
}

export const ProductCategoryRow: React.FC<ProductCategoryRowProps> = ({
  category,
}) => {
  return (
    <tr>
      <th>{category}</th>
    </tr>
  );
};
