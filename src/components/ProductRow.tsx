interface ProductRowProps {
  product: Product;
}

export const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
  return (
    <tr>
      <td>
        {product.stocked ? (
          product.name
        ) : (
          <span className="color-red">{product.name}</span>
        )}
      </td>
      <td> {product.price}</td>
    </tr>
  );
};
