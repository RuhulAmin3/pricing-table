import  { useState, useCallback, memo } from "react";

const AddProductForm = ({ addProduct }) => {
  const [form, setForm] = useState({ name: "", price: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // Validate inputs
      if (!form.name.trim() || !form.price.trim()) return;

      // Convert price to number and validate
      const priceValue = parseFloat(form.price);

      if (isNaN(priceValue) || priceValue <= 0) return;

      // Add product and reset form
      addProduct({ name: form.name.trim(), price: priceValue });

      setForm({ name: "", price: "" });

    },
    [form, price, addProduct]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        placeholder="Product Price"
        value={form.price}
        onChange={handleChange}
        min="0"
        required
      />

      <button type="submit" disabled={!form.name.trim() || !form.price.trim()}>
        Add Product
      </button>
    </form>
  );
};

export default memo(AddProductForm);
