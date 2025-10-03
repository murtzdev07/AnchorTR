import React, { useState } from "react";
import "./products.css";

// Example products
const initialProducts = [
  {
    id: 1,
    name: "Bolt M6",
    category: "Bolts",
    description: "High-quality M6 bolts made from stainless steel.",
    image: "/assets/products/bolt.jpg",
  },
  {
    id: 2,
    name: "Nut M6",
    category: "Nuts",
    description: "Durable M6 nuts, compatible with bolts.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 3,
    name: "Washer M6",
    category: "Washers",
    description: "Flat washers for even load distribution.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 4,
    name: "Screw M4",
    category: "Screws",
    description: "High-strength M4 screws for assembly.",
    image: "/assets/products/screw.jpg",
  },
];

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("name");

  const categories = ["All", "Bolts", "Nuts", "Washers", "Screws"];

  const filteredProducts = initialProducts
    .filter(
      (product) =>
        (category === "All" || product.category === category) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      return 0; // price removed
    });

  return (
    <div className="products">
      <div className="products-container">
        <h1>Our Products</h1>

        {/* Filters */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="name">Sort by Name</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
              </div>
              <div className="product-hover">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Category: {product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
