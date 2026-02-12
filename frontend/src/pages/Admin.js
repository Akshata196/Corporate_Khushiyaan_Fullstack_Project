import React, { useEffect, useState } from "react";
import axios from "axios";
import PageNavigation from "../components/PageNavigation";

function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: ""
  });

  // Fetch products
  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Add product
  const addProduct = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/products", form);

    alert("Product Added");

    setForm({
      name: "",
      description: "",
      price: "",
      category: "",
      image: ""
    });

    fetchProducts();
  };

  // Delete product
  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div style={{ padding: "40px" }}>
      <PageNavigation />
      <h2>Admin Panel</h2>

      {/* Add Product Form */}
      <form onSubmit={addProduct} style={formStyle}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input name="image" placeholder="Image path (/products/x.jpg)" value={form.image} onChange={handleChange} />

        <button type="submit">Add Product</button>
      </form>

      <h3 style={{ marginTop: "30px" }}>All Products</h3>

      {products.map((p) => (
        <div key={p._id} style={card}>
          <img src={p.image} alt={p.name} style={img} />

          <div>
            <h4>{p.name}</h4>
            <p>₹ {p.price}</p>

            <button onClick={() => deleteProduct(p._id)} style={delBtn}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* styles */

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "300px"
};

const card = {
  display: "flex",
  gap: "20px",
  background: "#1f2933",
  color: "white",
  padding: "10px",
  borderRadius: "8px",
  marginTop: "15px"
};

const img = {
  width: "80px",
  height: "80px",
  objectFit: "cover"
};

const delBtn = {
  background: "red",
  color: "white",
  border: "none",
  padding: "6px 10px",
  cursor: "pointer"
};

export default Admin;
