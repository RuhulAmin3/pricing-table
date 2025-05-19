import React, { useState, useCallback } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 2 },
  ]);

  const addProduct = useCallback((product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        ...product,
        id:
          prevProducts.length > 0
            ? Math.max(...prevProducts.map((p) => p.id)) + 1
            : 1,
      },
    ]);
  }, []);

  return (
    <div>
      <AddProductForm addProduct={addProduct} />
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No products available. Add a product to get started.</p>
      )}
    </div>
  );
};

export default App;
