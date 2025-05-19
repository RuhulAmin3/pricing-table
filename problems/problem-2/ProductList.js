import { memo } from "react";

const ProductList = memo(({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${parseFloat(product.price).toFixed(2)}
        </li>
      ))}
    </ul>
  );
});

export default ProductList;
    