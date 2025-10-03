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
    // ✅ Pins
  {
    id: 46,
    name: "Dowel Pins M1.6-M20",
    category: "Pins",
    description: "Precision dowel pins in sizes M1.6 to M20 for accurate alignment.",
    image: "/assets/products/pins.jpg",
  },
  {
    id: 47,
    name: "Taper Pin 2mm-12mm",
    category: "Pins",
    description: "Durable taper pins in sizes 2mm to 12mm.",
    image: "/assets/products/pins.jpg",
  },
  {
    id: 48,
    name: "Split Pin Zinc Plated M1.0-M12",
    category: "Pins",
    description: "Zinc plated split pins for locking fasteners, sizes M1.0 to M12.",
    image: "/assets/products/pins.jpg",
  },
  {
    id: 49,
    name: "Square Key Bar M3-M24",
    category: "Pins",
    description: "Square key bars in sizes M3 to M24 for shaft and hub connections.",
    image: "/assets/products/pins.jpg",
  },
  {
    id: 50,
    name: "Single & Double Spring Lock Clip (R-Pin)",
    category: "Pins",
    description: "Reliable single and double spring R-pins for securing parts.",
    image: "/assets/products/pins.jpg",
  },
  {
    id: 51,
    name: "Aluminum Blind Rivets 3.2m-6.3m",
    category: "Pins",
    description: "High-strength aluminum blind rivets, sizes 3.2mm to 6.3mm.",
    image: "/assets/products/pins.jpg",
  },
  {
    id: 52,
    name: "Circlips Internal & External M4-M200",
    category: "Pins",
    description: "Internal & external circlips in sizes M4 to M200.",
    image: "/assets/products/pins.jpg",
  },
  // ✅ Anchors
  {
    id: 53,
    name: "Self-Drilling Screws",
    category: "Anchors",
    description: "High-strength self-drilling screws for fastening into metal and concrete without pre-drilling.",
    image: "/assets/products/anchors.jpg",
  },
  {
    id: 54,
    name: "Drop In Anchor (Unifix)",
    category: "Anchors",
    description: "Reliable drop-in anchors (Unifix) for heavy-duty concrete applications.",
    image: "/assets/products/anchors.jpg",
  },
  {
    id: 55,
    name: "Fix Shields",
    category: "Anchors",
    description: "Strong fix shield anchors suitable for masonry and concrete installations.",
    image: "/assets/products/anchors.jpg",
  },
  {
    id: 56,
    name: "L Type Foundation Anchors",
    category: "Anchors",
    description: "Durable L type foundation anchors for structural support.",
    image: "/assets/products/anchors.jpg",
  },
  {
    id: 57,
    name: "Twisted Type Foundation Anchors",
    category: "Anchors",
    description: "Twisted type foundation anchors designed for enhanced grip and stability.",
    image: "/assets/products/anchors.jpg",
  },
  // ✅ Screws
  {
    id: 58,
    name: "NP Self Tapping Screws: CSK (+), PAN (-), PAN (+) #4 - #14",
    category: "Screws",
    description: "Nickel plated self tapping screws available in countersunk (+), pan head (-), and pan head (+) types, sizes #4 - #14.",
    image: "/assets/products/screw.jpg",
  },
  {
    id: 59,
    name: "Brass CSK (-) Wood Screws #4 - #12",
    category: "Screws",
    description: "Durable brass countersunk (-) wood screws, sizes #4 - #12.",
    image: "/assets/products/screw.jpg",
  },
  {
    id: 60,
    name: "GI Coach Screws",
    category: "Screws",
    description: "Galvanized iron coach screws for heavy-duty fastening in wood and masonry.",
    image: "/assets/products/screw.jpg",
  },
  {
    id: 61,
    name: "Steel CSK (-), PAN (-) Machine Screws M3 - M16; INCH 1/8\" - 1/2\"",
    category: "Screws",
    description: "Steel machine screws available in countersunk (-) and pan head (-), sizes M3 - M16, and inch sizes 1/8\" - 1/2\".",
    image: "/assets/products/screw.jpg",
  },
  {
    id: 62,
    name: "ST ST CSK (-) (M2 - M16), CSK (+) (M2 - M8)",
    category: "Screws",
    description: "Stainless steel countersunk screws, (-) from M2 - M16 and (+) from M2 - M8.",
    image: "/assets/products/screw.jpg",
  },
  {
    id: 63,
    name: "ST ST PAN (+), Cheese Head (-) Machine Screws M2 - M6",
    category: "Screws",
    description: "Stainless steel pan (+) and cheese head (-) machine screws, sizes M2 - M6.",
    image: "/assets/products/screw.jpg",
  },
  {
    id: 64,
    name: "ST ST PAN (-), CSK (+) Self Tapping Screws",
    category: "Screws",
    description: "Stainless steel self tapping screws in pan (-) and countersunk (+) types.",
    image: "/assets/products/screw.jpg",
  },
  {
    id: 65,
    name: "ST ST CSK (-) Wood Screws",
    category: "Screws",
    description: "Stainless steel countersunk (-) wood screws for furniture and woodworking applications.",
    image: "/assets/products/screw.jpg",
  },
  // ✅ Allen Products
  {
    id: 66,
    name: "Button Head Allen Bolt M4 - M12",
    category: "Allen Products",
    description: "Durable button head Allen bolts available in M4 - M12 sizes.",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 67,
    name: "Low Head Allen Bolt M4 - M24",
    category: "Allen Products",
    description: "Low head Allen bolts for applications with limited clearance, sizes M4 - M24.",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 68,
    name: "Allen Bolts 12.9 Metric M2 - M36",
    category: "Allen Products",
    description: "High tensile grade 12.9 Allen bolts in metric sizes M2 - M36.",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 69,
    name: "Allen Bolt 12.9 Metric Fine M8 - M20",
    category: "Allen Products",
    description: "High-strength grade 12.9 Allen bolts in metric fine thread, sizes M8 - M20.",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 70,
    name: "#304 & #316 Stainless Steel Allen Bolt M3 - M24",
    category: "Allen Products",
    description: "Stainless steel Allen bolts in grades #304 and #316, sizes M3 - M24.",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 71,
    name: "Allen Bolts INCH:- UNC, BSW 3/16\" to 1 1/2\"",
    category: "Allen Products",
    description: "Allen bolts available in UNC and BSW inch sizes 3/16\" to 1 1/2\".",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 72,
    name: "#304 & #316 Allen Bolts INCH - UNC, BSW 3/16\" to 1\"",
    category: "Allen Products",
    description: "Stainless steel #304 & #316 Allen bolts in UNC and BSW standards, 3/16\" to 1\".",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 73,
    name: "Allen Bolt UNF 1/4\" - 3/4\"",
    category: "Allen Products",
    description: "Allen bolts with UNF threads, sizes 1/4\" to 3/4\".",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 74,
    name: "Allen Bolt Nr Thread #4-40 - #10-32",
    category: "Allen Products",
    description: "Allen bolts with Nr thread sizes ranging from #4-40 to #10-32.",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 75,
    name: "Full Thread Allen Bolts M8 - M20",
    category: "Allen Products",
    description: "Fully threaded Allen bolts in metric sizes M8 - M20.",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 76,
    name: "Allen Grub Screw M2 - M20, Metric Fine M8 - M12",
    category: "Allen Products",
    description: "Allen grub screws in metric sizes M2 - M20 and metric fine thread M8 - M12.",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 77,
    name: "Allen Grub Screw UNC #4 - 1\", UNF 1/4\" - 3/4\"",
    category: "Allen Products",
    description: "Allen grub screws available in UNC #4 - 1\" and UNF 1/4\" - 3/4\".",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 78,
    name: "CSK Allen Bolts M3 - M24",
    category: "Allen Products",
    description: "Countersunk Allen bolts available in sizes M3 - M24.",
    image: "/assets/products/allen.jpg",
  },
  {
    id: 79,
    name: "CSK Allen Bolts UNC 3/16\" - 1\"",
    category: "Allen Products",
    description: "Countersunk Allen bolts in UNC sizes 3/16\" - 1\".",
    image: "/assets/products/allen.jpg",
  },
  // ✅ Washers
  {
    id: 80,
    name: "Zinc Plated & Black Flat Washer D125 M3 - M75",
    category: "Washers",
    description: "Durable zinc plated and black flat washers in sizes M3 to M75.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 81,
    name: "Zinc Plated Body Washer M3 - M50",
    category: "Washers",
    description: "High-quality zinc plated body washers in sizes M3 to M50.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 82,
    name: "Zinc Plated & Stainless Steel Star Washers Internal/External M3 - M30",
    category: "Washers",
    description: "Internal and external star washers in zinc plated and stainless steel, sizes M3 to M30.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 83,
    name: "Zinc Plated & Black Spring Washer M3 - M6",
    category: "Washers",
    description: "Spring washers in zinc plated and black finishes, sizes M3 to M6.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 84,
    name: "Conical Spring Washer M12 - M22",
    category: "Washers",
    description: "High-strength conical spring washers in sizes M12 to M22.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 85,
    name: "'V' Cup Type Star Washer (External only)",
    category: "Washers",
    description: "External only 'V' cup type star washers for locking applications.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 86,
    name: "YP Contact Washers Type P & M - M3 to M30",
    category: "Washers",
    description: "YP contact washers Type P & M in sizes M3 to M30.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 87,
    name: "Steel & Stainless Steel Neoprene Bonded Washer",
    category: "Washers",
    description: "Bonded neoprene washers in steel and stainless steel.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 88,
    name: "Stainless Steel, Brass & Copper Flat Washer",
    category: "Washers",
    description: "Flat washers available in stainless steel, brass, and copper.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 89,
    name: "Round Star Lock Washer",
    category: "Washers",
    description: "Round star lock washers for secure fastening.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 90,
    name: "Hex Lock Washer",
    category: "Washers",
    description: "Durable hexagonal lock washers for mechanical applications.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 91,
    name: "Square Allen Spring Washer MS & Stainless Steel",
    category: "Washers",
    description: "Square Allen spring washers in mild steel and stainless steel.",
    image: "/assets/products/washer.jpg",
  },
  {
    id: 92,
    name: "Square Taper Washer",
    category: "Washers",
    description: "Square taper washers designed for structural and mechanical applications.",
    image: "/assets/products/washer.jpg",
  },

];

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("name");

  const categories = ["All", "Bolts", "Nuts", "Washers", "Screws", "Threaded Bars","Pins","Anchors","Allen Products","Structural Fasteners"];

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
