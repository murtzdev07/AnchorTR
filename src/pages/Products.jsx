import React, { useState } from "react";
import "./products.css";

// Example products
const initialProducts = [
  // Existing examples
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

  // ✅ Bolt Products
  {
    id: 5,
    name: "8.8 Black Bolt M4 - M36",
    category: "Bolts",
    description: "Grade 8.8 black bolts sourced from China and Taiwan.",
    image: "/assets/products/bolt.jpg",
  },
  {
    id: 6,
    name: "10.9 Black Bolt M10 - M36",
    category: "Bolts",
    description: "Grade 10.9 black bolts imported from Canada and Italy.",
    image: "/assets/products/bolt.jpg",
  },
  {
    id: 7,
    name: "Stainless Steel A2 & A4 Bolt M3 - M24",
    category: "Bolts",
    description: "High-quality stainless steel bolts from France & Germany.",
    image: "/assets/products/bolt.jpg",
  },
  {
    id: 8,
    name: "Brass Hex Bolts M3 - M24",
    category: "Bolts",
    description: "Durable brass hex bolts manufactured in India.",
    image: "/assets/products/bolt.jpg",
  },
  {
    id: 9,
    name: "Grade 8.8 & 10.9 Bolts Fine Thread M8 - M24",
    category: "Bolts",
    description: "Fine thread bolts from China and Italy.",
    image: "/assets/products/bolt.jpg",
  },
  {
    id: 10,
    name: "UNC & UNF Grade 5 & 8 Bolts",
    category: "Bolts",
    description: "Premium grade 5 & 8 bolts from Canada.",
    image: "/assets/products/bolt.jpg",
  },
  {
    id: 11,
    name: "Mild Steel Bolts",
    category: "Bolts",
    description: "Available in Metric, Metric Fine, UNC, UNF, BSF standards.",
    image: "/assets/products/bolt.jpg",
  },
  {
    id: 12,
    name: "Carriage Bolts Black 1\" - 3/4\"",
    category: "Bolts",
    description: "Black carriage bolts from China and Canada.",
    image: "/assets/products/bolt.jpg",
  },
  {
    id: 13,
    name: "Roofing Bolts M6 - M10 & 3/16 - 1/4",
    category: "Bolts",
    description: "Durable roofing bolts for construction projects.",
    image: "/assets/products/bolt.jpg",
  },
  {
    id: 14,
    name: "Elevator Bolts M8 & M10",
    category: "Bolts",
    description: "Reliable elevator bolts designed for heavy-duty use.",
    image: "/assets/products/bolt.jpg",
  },
  {
    id: 15,
    name: "Lifting Eye Bolts M6 - M36",
    category: "Bolts",
    description: "Heavy-duty lifting eye bolts manufactured in Holland.",
    image: "/assets/products/bolt.jpg",
  },

  // ✅ New Nuts
  {
    id: 16,
    name: "Cl-8, Cl-10 Hex Nuts",
    category: "Nuts",
    description: "HDG, Black & Zinc Plated Hex Nuts M3 - M60.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 17,
    name: "Metric Fine Hex Nuts",
    category: "Nuts",
    description: "Precision Metric Fine Hex Nuts M8 - M36.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 18,
    name: "Imperial Hex Nuts",
    category: "Nuts",
    description: "UNC 1/4 - 1 1/2\", UNF 1/4 - 3\", BSF 1/4 - 1/2\".",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 19,
    name: "Nickel Plated Wing Nuts",
    category: "Nuts",
    description: "M5 - M20; UNC 3/16\" - 5/8\".",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 20,
    name: "Dome Nuts",
    category: "Nuts",
    description: "M5 - M24 & 1/4\" - 5/8\" Dome Shaped Nuts.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 21,
    name: "Half Nuts",
    category: "Nuts",
    description: "Durable half nuts M6 - M24.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 22,
    name: "Nylock Nuts Metric",
    category: "Nuts",
    description: "Nylock Nuts Metric M3 - M36, Fine Thread M8 - M24.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 23,
    name: "Nylock Nuts UNC & UNF",
    category: "Nuts",
    description: "Sizes 1/4\" to 2\" Nylock standard.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 24,
    name: "Full Steel Lock Nuts",
    category: "Nuts",
    description: "Metric & Metric Fine M8 - M24 Lock Nuts.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 25,
    name: "Long Nuts Zinc Plated",
    category: "Nuts",
    description: "Zinc plated long nuts M6 - M24.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 26,
    name: "2H Nuts Black",
    category: "Nuts",
    description: "Black 2H Nuts 3/8\" to 3\".",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 27,
    name: "Spring Nuts Zinc Plated & HDG",
    category: "Nuts",
    description: "Spring Nuts M6, M8, M10.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 28,
    name: "Stainless Steel A2 & A4 Nuts",
    category: "Nuts",
    description: "Metric Stainless Steel Nuts M2 - M36.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 29,
    name: "Stainless Steel UNC Nuts",
    category: "Nuts",
    description: "UNC 1/4\" - 1\" Stainless Steel Nuts.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 30,
    name: "Lifting Eye Nuts",
    category: "Nuts",
    description: "M6 - M36 Lifting Eye Nuts (Holland).",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 31,
    name: "Castle Nuts (Slotted)",
    category: "Nuts",
    description: "M6 - M36 Castle Slotted Nuts.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 32,
    name: "Castle Nuts Metric Fine",
    category: "Nuts",
    description: "Metric Fine M6 - M36 Castle Slotted Nuts.",
    image: "/assets/products/nut.jpg",
  },
  {
    id: 33,
    name: "Zinc Plated Teeth Nuts",
    category: "Nuts",
    description: "Teeth Nuts M6, M8, M10, M12.",
    image: "/assets/products/nut.jpg",
  },

  // ✅ Threaded Bars
  {
    id: 34,
    name: "Zinc Plated 2 Meters M6-M52",
    category: "Threaded Bars",
    description: "Durable zinc plated threaded bar in sizes M6 to M52.",
    image: "/assets/products/threadedbar.jpg",
  },
  {
    id: 35,
    name: "Zinc Plated 2 Meters 1/4-2\"",
    category: "Threaded Bars",
    description: "Strong zinc plated threaded bar in imperial sizes 1/4 to 2\".",
    image: "/assets/products/threadedbar.jpg",
  },
  {
    id: 36,
    name: "Black 2 Meters M6-M52",
    category: "Threaded Bars",
    description: "Black coated threaded bar M6 to M52 for strength.",
    image: "/assets/products/threadedbar.jpg",
  },
  {
    id: 37,
    name: "Black 2 Meters Metric Fine M10 - M36",
    category: "Threaded Bars",
    description: "Black metric fine threaded bar sizes M10 to M36.",
    image: "/assets/products/threadedbar.jpg",
  },
  {
    id: 38,
    name: "Black 2 Meters UNC 1/4\" - 2\"",
    category: "Threaded Bars",
    description: "UNC standard black threaded bars from 1/4\" to 2\".",
    image: "/assets/products/threadedbar.jpg",
  },
  {
    id: 39,
    name: "Black 2 Meters UNF 1/2\" - 1\"",
    category: "Threaded Bars",
    description: "UNF black threaded bars in sizes 1/2\" to 1\".",
    image: "/assets/products/threadedbar.jpg",
  },
  {
    id: 40,
    name: "B7 Black Threaded Bar 1/2 -2\"",
    category: "Threaded Bars",
    description: "B7 black threaded bar in imperial 1/2\" to 2\" sizes.",
    image: "/assets/products/threadedbar.jpg",
  },
  {
    id: 41,
    name: "B7 Black Threaded Bar 12mm-36mm",
    category: "Threaded Bars",
    description: "B7 black threaded bar in metric sizes 12mm to 36mm.",
    image: "/assets/products/threadedbar.jpg",
  },
  {
    id: 42,
    name: "Brass 2 Meters M4 -M24",
    category: "Threaded Bars",
    description: "Durable brass threaded bar in sizes M4 to M24.",
    image: "/assets/products/threadedbar.jpg",
  },
  {
    id: 43,
    name: "St Steel #304 1 Meter Threaded Bar M3-M24",
    category: "Threaded Bars",
    description: "High-quality stainless steel #304 threaded bar, 1 meter, M3-M24.",
    image: "/assets/products/threadedbar.jpg",
  },
  {
    id: 44,
    name: "St Steel #304 2 Meter Threaded Bar M3-M24",
    category: "Threaded Bars",
    description: "High-quality stainless steel #304 threaded bar, 2 meter, M3-M24.",
    image: "/assets/products/threadedbar.jpg",
  },
  {
    id: 45,
    name: "St Steel 1 Meter Threaded Bar 1/4-1\"",
    category: "Threaded Bars",
    description: "Stainless steel 1 meter threaded bar in imperial 1/4\" to 1\".",
    image: "/assets/products/threadedbar.jpg",
  },
];

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("name");

  const categories = ["All", "Bolts", "Nuts", "Washers", "Screws", "Threaded Bars"];

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
