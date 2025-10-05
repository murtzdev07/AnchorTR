import React, { useState } from "react";
import "./products.css";

// Example products
const initialProducts = [
  // Existing examples
  // {
  //   id: 1,
  //   name: "Bolt M6",
  //   category: "Bolts",
  //   description: "High-quality M6 bolts made from stainless steel.",
  //   image: "/assets/products/bolt.jpg",
  // },
  // {
  //   id: 2,
  //   name: "Nut M6",
  //   category: "Nuts",
  //   description: "Durable M6 nuts, compatible with bolts.",
  //   image: "/assets/products/nut.jpg",
  // },
  // {
  //   id: 3,
  //   name: "Washer M6",
  //   category: "Washers",
  //   description: "Flat washers for even load distribution.",
  //   image: "/assets/products/washer.jpg",
  // },
  // {
  //   id: 4,
  //   name: "Screw M4",
  //   category: "Screws",
  //   description: "High-strength M4 screws for assembly.",
  //   image: "/assets/products/screw.jpg",
  // },

  // ✅ Bolt Products
  {
    id: 5,
    name: "8.8 Black Bolt M4 - M36",
    category: "Bolts",
    description: "Grade 8.8 black bolts sourced from China and Taiwan.",
    image: "/Bolts/8.8 Black Bolt M4 - M36 (China, Taiwan).jpg",
  },
  {
    id: 6,
    name: "10.9 Black Bolt M10 - M36",
    category: "Bolts",
    description: "Grade 10.9 black bolts imported from Canada and Italy.",
    image: "/Bolts/10.9 Black Bolt M10 - M36 (Canada, Italy).jpg",
  },
  {
    id: 7,
    name: "Stainless Steel A2 & A4 Bolt M3 - M24",
    category: "Bolts",
    description: "High-quality stainless steel bolts from France & Germany.",
    image: "/Bolts/St. Steel A2 & A4 Bolt M3 - M24 (France & Germany).png",
  },
  {
    id: 8,
    name: "Brass Hex Bolts M3 - M24",
    category: "Bolts",
    description: "Durable brass hex bolts manufactured in India.",
    image: "/Bolts/Brass Hex Bolts M3 - M24 (India).webp",
  },
  {
    id: 9,
    name: "Grade 8.8 & 10.9 Bolts Fine Thread M8 - M24",
    category: "Bolts",
    description: "Fine thread bolts from China and Italy.",
    image: "/Bolts/Grade 8.8 & 10.9 Bolts Fine Thread M8-M24 (China, Italy).webp",
  },
  {
    id: 10,
    name: "UNC & UNF Grade 5 & 8 Bolts",
    category: "Bolts",
    description: "Premium grade 5 & 8 bolts from Canada.",
    image: "/Bolts/UNC & UNF Grade 5 & Grade 8 Bolts (Canada).jpg",
  },
  {
    id: 11,
    name: "Mild Steel Bolts",
    category: "Bolts",
    description: "Available in Metric, Metric Fine, UNC, UNF, BSF standards.",
    image: "/Bolts/Mild Steel Bolt in Metric, Metric Fine and in UNC, UNF, BSF.png",
  },
  {
    id: 12,
    name: "Carriage Bolts Black 1\" - 3/4\"",
    category: "Bolts",
    description: "Black carriage bolts from China and Canada.",
    image: "/Bolts/Carriage Bolts Black Diameter (China, Canada).jpg",
  },
  {
    id: 13,
    name: "Roofing Bolts M6 - M10 & 3/16 - 1/4",
    category: "Bolts",
    description: "Durable roofing bolts for construction projects.",
    image: "/Bolts/Roofing bolt M6 - M10.jpg",
  },
  {
    id: 14,
    name: "Elevator Bolts M8 & M10",
    category: "Bolts",
    description: "Reliable elevator bolts designed for heavy-duty use.",
    image: "/Bolts/Elevator Bolts M8 & M10.jpg",
  },
  {
    id: 15,
    name: "Lifting Eye Bolts M6 - M36",
    category: "Bolts",
    description: "Heavy-duty lifting eye bolts manufactured in Holland.",
    image: "/Bolts/Lifting Eye Bolts M6 - M36 (Holland).jpg",
  },

  // ✅ New Nuts
  {
    id: 16,
    name: "Cl-8, Cl-10 Hex Nuts",
    category: "Nuts",
    description: "HDG, Black & Zinc Plated Hex Nuts M3 - M60.",
    image: "/Nuts/Cl-8, Cl-10 Hex Nuts (HDG, Black & Zinc Plated M3 - M60).jpg",
  },
  {
    id: 17,
    name: "Metric Fine Hex Nuts",
    category: "Nuts",
    description: "Precision Metric Fine Hex Nuts M8 - M36.",
    image: "/Nuts/Metric Fine Hex Nuts (M8-M36).jpg.png",
  },
  {
    id: 18,
    name: "Imperial Hex Nuts",
    category: "Nuts",
    description: "UNC 1/4 - 1 1/2\", UNF 1/4 - 3\", BSF 1/4 - 1/2\".",
    image: "/Nuts/Imperial Hex Nut.jpg",
  },
  {
    id: 19,
    name: "Nickel Plated Wing Nuts",
    category: "Nuts",
    description: "M5 - M20; UNC 3/16\" - 5/8\".",
    image: "/Nuts/Nickle Plated Wing Nut.jpg",
  },
  {
    id: 20,
    name: "Dome Nuts",
    category: "Nuts",
    description: "M5 - M24 & 1/4\" - 5/8\" Dome Shaped Nuts.",
    image: "/Nuts/Dome Nut.jpg",
  },
  {
    id: 21,
    name: "Half Nuts",
    category: "Nuts",
    description: "Durable half nuts M6 - M24.",
    image: "/Nuts/Half Nut.jpg",
  },
  {
    id: 22,
    name: "Nylock Nuts Metric",
    category: "Nuts",
    description: "Nylock Nuts Metric M3 - M36, Fine Thread M8 - M24.",
    image: "/Nuts/Nylock Nuts.jpg",
  },
  {
    id: 23,
    name: "Nylock Nuts UNC & UNF",
    category: "Nuts",
    description: "Sizes 1/4\" to 2\" Nylock standard.",
    image: "/Nuts/Nylock Nuts UNC & UNF.png",
  },
  {
    id: 24,
    name: "Full Steel Lock Nuts",
    category: "Nuts",
    description: "Metric & Metric Fine M8 - M24 Lock Nuts.",
    image: "/Nuts/Full Steel Lock Nut (Metric & Metric Fine M8 - M24).jpg",
  },
  {
    id: 25,
    name: "Long Nuts Zinc Plated",
    category: "Nuts",
    description: "Zinc plated long nuts M6 - M24.",
    image: "/Nuts/Long Nuts Zinc Plated (M6 - M24).jpg",
  },
  {
    id: 26,
    name: "2H Nuts Black",
    category: "Nuts",
    description: "Black 2H Nuts 3/8\" to 3\".",
    image: "/Nuts/2H Nuts Black.jpg",
  },
  {
    id: 27,
    name: "Spring Nuts Zinc Plated & HDG",
    category: "Nuts",
    description: "Spring Nuts M6, M8, M10.",
    image: "/Nuts/Spring Nut Zinc Plated & HDG (M6 M8 M10).jpg",
  },
  {
    id: 28,
    name: "Stainless Steel A2 & A4 Nuts",
    category: "Nuts",
    description: "Metric Stainless Steel Nuts M2 - M36.",
    image: "/Nuts/St Steel A2 & A4 Metric Nuts (M2 – M36).jpg",
  },
  {
    id: 29,
    name: "Stainless Steel UNC Nuts",
    category: "Nuts",
    description: "UNC 1/4\" - 1\" Stainless Steel Nuts.",
    image: "/Nuts/St Steel Nut UNC.jpg",
  },
  {
    id: 30,
    name: "Lifting Eye Nuts",
    category: "Nuts",
    description: "M6 - M36 Lifting Eye Nuts (Holland).",
    image: "/Nuts/Lifting Eye Nut (M6 - M36 Holland).jpg",
  },
  {
    id: 31,
    name: "Castle Nuts (Slotted)",
    category: "Nuts",
    description: "M6 - M36 Castle Slotted Nuts.",
    image: "/Nuts/Castle nut (Slotted Nut) (M6 - M36 & Metric Fine M6 - M36).jpg",
  },
  {
    id: 32,
    name: "Castle Nuts Metric Fine",
    category: "Nuts",
    description: "Metric Fine M6 - M36 Castle Slotted Nuts.",
    image: "/Nuts/Castle nut (Slotted Nut) (M6 - M36 & Metric Fine M6 - M36).jpg",
  },
  {
    id: 33,
    name: "Zinc Plated Teeth Nuts",
    category: "Nuts",
    description: "Teeth Nuts M6, M8, M10, M12.",
    image: "/Nuts/Zinc plated Teeth Nut (M6, M8, M10, M12).jpg",
  },

  // ✅ Threaded Bars
  {
    id: 34,
    name: "Zinc Plated 2 Meters M6-M52",
    category: "Threaded Bars",
    description: "Durable zinc plated threaded bar in sizes M6 to M52.",
    image: "/Threaded Bars/Zinc Plated 2 Meters (M6-M52.jpg",
  },
  {
    id: 35,
    name: "Zinc Plated 2 Meters 1/4-2\"",
    category: "Threaded Bars",
    description: "Strong zinc plated threaded bar in imperial sizes 1/4 to 2\".",
    image: "/Threaded Bars/Zinc Plated 2 Meters.jpg",
  },
  {
    id: 36,
    name: "Black 2 Meters M6-M52",
    category: "Threaded Bars",
    description: "Black coated threaded bar M6 to M52 for strength.",
    image: "/Threaded Bars/Black 2 Meters (M6-M52).jpg",
  },
  {
    id: 37,
    name: "Black 2 Meters Metric Fine M10 - M36",
    category: "Threaded Bars",
    description: "Black metric fine threaded bar sizes M10 to M36.",
    image: "/Threaded Bars/Black 2 Meters Metric Fine (M10 - M36).jpg",
  },
  {
    id: 38,
    name: "Black 2 Meters UNC 1/4\" - 2\"",
    category: "Threaded Bars",
    description: "UNC standard black threaded bars from 1/4\" to 2\".",
    image: "/Threaded Bars/Black 2 Meters UNC.jpg",
  },
  {
    id: 39,
    name: "Black 2 Meters UNF 1/2\" - 1\"",
    category: "Threaded Bars",
    description: "UNF black threaded bars in sizes 1/2\" to 1\".",
    image: "/Threaded Bars/Black 2 Meters UNF.jpg",
  },
  {
    id: 40,
    name: "B7 Black Threaded Bar 1/2 -2\"",
    category: "Threaded Bars",
    description: "B7 black threaded bar in imperial 1/2\" to 2\" sizes.",
    image: "/Threaded Bars/B7 Black Threaded Ba.jpg",
  },
  {
    id: 41,
    name: "B7 Black Threaded Bar 12mm-36mm",
    category: "Threaded Bars",
    description: "B7 black threaded bar in metric sizes 12mm to 36mm.",
    image: "/Threaded Bars/B7 Black Threaded Bar (12mm - 36mm).jpg",
  },
  {
    id: 42,
    name: "Brass 2 Meters M4 -M24",
    category: "Threaded Bars",
    description: "Durable brass threaded bar in sizes M4 to M24.",
    image: "/Threaded Bars/Brass 2 Meters (M4 - M24).jpg",
  },
  {
    id: 43,
    name: "St Steel 304 1 Meter Threaded Bar M3-M24",
    category: "Threaded Bars",
    description: "High-quality stainless steel 304 threaded bar, 1 meter, M3-M24.",
    image: "/Threaded Bars/St Steel 304 1 Meter Threaded Bar (M3 - M24).jpg",
  },
  // Pins
  {
    id: 44,
    name: "St Steel 304 2 Meter Threaded Bar M3-M24",
    category: "Threaded Bars",
    description: "High-quality stainless steel 304 threaded bar, 2 meter, M3-M24.",
    image: "/Threaded Bars/St Steel 304 2 Meter Threaded Bar M3-M24.jpg",
  },
  {
    id: 45,
    name: "St Steel 1 Meter Threaded Bar 1/4-1\"",
    category: "Threaded Bars",
    description: "Stainless steel 1 meter threaded bar in imperial 1/4\" to 1\".",
    image: "/Threaded Bars/St Steel 1 Meter Threaded Bar 14-1.jpg",
  },
    // ✅ Pins
  {
    id: 46,
    name: "Dowel Pins M1.6-M20",
    category: "Pins",
    description: "Precision dowel pins in sizes M1.6 to M20 for accurate alignment.",
    image: "/Pins/Dowel Pins M1.6-M20.jpg",
  },
  {
    id: 47,
    name: "Taper Pin 2mm-12mm",
    category: "Pins",
    description: "Durable taper pins in sizes 2mm to 12mm.",
    image: "/Pins/Taper Pin 2mm-12mm.jpg",
  },
  {
    id: 48,
    name: "Split Pin Zinc Plated M1.0-M12",
    category: "Pins",
    description: "Zinc plated split pins for locking fasteners, sizes M1.0 to M12.",
    image: "/Pins/Split pin Zinc Plated M1.0-M12.jpg",
  },
  {
    id: 49,
    name: "Square Key Bar M3-M24",
    category: "Pins",
    description: "Square key bars in sizes M3 to M24 for shaft and hub connections.",
    image: "/Pins/Square Key Bar M3-M24.webp",
  },
  {
    id: 50,
    name: "Single & Double Spring Lock Clip (R-Pin)",
    category: "Pins",
    description: "Reliable single and double spring R-pins for securing parts.",
    image: "/Pins/Single & Double Spring Lock Clip (R-Pin).jpg",
  },
  {
    id: 51,
    name: "Aluminum Blind Rivets 3.2m-6.3m",
    category: "Pins",
    description: "High-strength aluminum blind rivets, sizes 3.2mm to 6.3mm.",
    image: "/Pins/Aluminum Blind Rivets 3.2m-6.3m.webp",
  },
  {
    id: 52,
    name: "Circlips Internal & External M4-M200",
    category: "Pins",
    description: "Internal & external circlips in sizes M4 to M200.",
    image: "/Pins/Circlips Internal& External M4-M200.jpg",
  },
  // ✅ Anchors
  {
    id: 53,
    name: "Self-Drilling Screws",
    category: "Anchors",
    description: "High-strength self-drilling screws for fastening into metal and concrete without pre-drilling.",
    image: "/Anchors/Self-Drilling Screws.jpg",
  },
  {
    id: 54,
    name: "Drop In Anchor (Unifix)",
    category: "Anchors",
    description: "Reliable drop-in anchors (Unifix) for heavy-duty concrete applications.",
    image: "/Anchors/Drop In Anchor (Unifix).jpg",
  },
  {
    id: 55,
    name: "Fix Shields",
    category: "Anchors",
    description: "Strong fix shield anchors suitable for masonry and concrete installations.",
    image: "/Anchors/Fix Shields.avif",
  },
  {
    id: 56,
    name: "L Type Foundation Anchors",
    category: "Anchors",
    description: "Durable L type foundation anchors for structural support.",
    image: "/Anchors/L Type Foundation Anchors.avif",
  },
  {
    id: 57,
    name: "Twisted Type Foundation Anchors",
    category: "Anchors",
    description: "Twisted type foundation anchors designed for enhanced grip and stability.",
    image: "/Anchors/Twisted Type Foundation Anchors.jpg",
  },
  // ✅ Screws
  {
    id: 58,
    name: "NP Self Tapping Screws: CSK (+), PAN (-), PAN (+) #4 - #14",
    category: "Screws",
    description: "Nickel plated self tapping screws available in countersunk (+), pan head (-), and pan head (+) types, sizes #4 - #14.",
    image: "/Screws/NP Self tapping Screws.webp",
  },
  {
    id: 59,
    name: "Brass CSK (-) Wood Screws #4 - #12",
    category: "Screws",
    description: "Durable brass countersunk (-) wood screws, sizes #4 - #12.",
    image: "/Screws/Brass CSK Wood Screws.jpg",
  },
  {
    id: 60,
    name: "GI Coach Screws",
    category: "Screws",
    description: "Galvanized iron coach screws for heavy-duty fastening in wood and masonry.",
    image: "/Screws/GI Coach Screws.jpg",
  },
  {
    id: 61,
    name: "Steel CSK (-), PAN (-) Machine Screws M3 - M16; INCH 1/8\" - 1/2\"",
    category: "Screws",
    description: "Steel machine screws available in countersunk (-) and pan head (-), sizes M3 - M16, and inch sizes 1/8\" - 1/2\".",
    image: "/Screws/Steel CSK , PAN  Machine Screw, ST ST CSK, CSK.jpg",
  },
  {
    id: 62,
    name: "ST ST CSK (-) (M2 - M16), CSK (+) (M2 - M8)",
    category: "Screws",
    description: "Stainless steel countersunk screws, (-) from M2 - M16 and (+) from M2 - M8.",
    image: "/Screws/ST ST CSK (-) (M2-M16), CSK (+) (M2-M8).jpg",
  },
  {
    id: 63,
    name: "ST ST PAN (+), Cheese Head (-) Machine Screws M2 - M6",
    category: "Screws",
    description: "Stainless steel pan (+) and cheese head (-) machine screws, sizes M2 - M6.",
    image: "/Screws/ST ST PAN , Cheese Head  MScrew M2 - M6.webp",
  },
  {
    id: 64,
    name: "ST ST PAN (-), CSK (+) Self Tapping Screws",
    category: "Screws",
    description: "Stainless steel self tapping screws in pan (-) and countersunk (+) types.",
    image: "/Screws/ST ST PAN (-), CSK (+), Self Tapping Screws.webp",
  },
  {
    id: 65,
    name: "ST ST CSK (-) Wood Screws",
    category: "Screws",
    description: "Stainless steel countersunk (-) wood screws for furniture and woodworking applications.",
    image: "/Screws/ST ST CSK (-)Wood Screws.jpg",
  },
  // ✅ Allen Products
  {
    id: 66,
    name: "Button Head Allen Bolt M4 - M12",
    category: "Allen Products",
    description: "Durable button head Allen bolts available in M4 - M12 sizes.",
    image: "/Allen Products/Button Head Allen Bolt M4 M12.jpg",
  },
  {
    id: 67,
    name: "Low Head Allen Bolt M4 - M24",
    category: "Allen Products",
    description: "Low head Allen bolts for applications with limited clearance, sizes M4 - M24.",
    image: "/Allen Products/Low Head Allen Bolt M4 M24.jpg",
  },
  {
    id: 68,
    name: "Allen Bolts 12.9 Metric M2 - M36",
    category: "Allen Products",
    description: "High tensile grade 12.9 Allen bolts in metric sizes M2 - M36.",
    image: "/Allen Products/Allen Bolts 12.9 Metric M2 M36.jpg",
  },
  {
    id: 69,
    name: "Allen Bolt 12.9 Metric Fine M8 - M20",
    category: "Allen Products",
    description: "High-strength grade 12.9 Allen bolts in metric fine thread, sizes M8 - M20.",
    image: "/Allen Products/Allen Bolt 12.9 Metric Fine M8 M20.jpg",
  },
  {
    id: 70,
    name: "#304 & #316 Stainless Steel Allen Bolt M3 - M24",
    category: "Allen Products",
    description: "Stainless steel Allen bolts in grades #304 and #316, sizes M3 - M24.",
    image: "/Allen Products/304 & 316 Stainless Steel Allen Bolt M3 M24.avif",
  },
  {
    id: 71,
    name: "Allen Bolts INCH:- UNC, BSW 3/16\" to 1 1/2\"",
    category: "Allen Products",
    description: "Allen bolts available in UNC and BSW inch sizes 3/16\" to 1 1/2\".",
    image: "/Allen Products/Allen bolts inch unc bsw.jpg",
  },
  {
    id: 72,
    name: "#304 & #316 Allen Bolts INCH - UNC, BSW 3/16\" to 1\"",
    category: "Allen Products",
    description: "Stainless steel #304 & #316 Allen bolts in UNC and BSW standards, 3/16\" to 1\".",
    image: "/Allen Products/304 & 316 Allen Bolts INCH UNC, BSW.jpg",
  },
  {
    id: 73,
    name: "Allen Bolt UNF 1/4\" - 3/4\"",
    category: "Allen Products",
    description: "Allen bolts with UNF threads, sizes 1/4\" to 3/4\".",
    image: "/Allen Products/Allen Bolt UNF.jpg",
  },
  {
    id: 74,
    name: "Allen Bolt Nr Thread #4-40 - #10-32",
    category: "Allen Products",
    description: "Allen bolts with Nr thread sizes ranging from #4-40 to #10-32.",
    image: "/Allen Products/Allen Bolt Nr Thread.jpg",
  },
  {
    id: 75,
    name: "Full Thread Allen Bolts M8 - M20",
    category: "Allen Products",
    description: "Fully threaded Allen bolts in metric sizes M8 - M20.",
    image: "/Allen Products/Full Thread Allen Bolts M8 M20.jpeg",
  },
  {
    id: 76,
    name: "Allen Grub Screw M2 - M20, Metric Fine M8 - M12",
    category: "Allen Products",
    description: "Allen grub screws in metric sizes M2 - M20 and metric fine thread M8 - M12.",
    image: "/Allen Products/Allen Grub Screw M2 M20 METRIC FINE M8 M12.jpg",
  },
  {
    id: 77,
    name: "Allen Grub Screw UNC #4 - 1\", UNF 1/4\" - 3/4\"",
    category: "Allen Products",
    description: "Allen grub screws available in UNC #4 - 1\" and UNF 1/4\" - 3/4\".",
    image: "/Allen Products/Allen Grub Screw UNC.jpg",
  },
  {
    id: 78,
    name: "CSK Allen Bolts M3 - M24",
    category: "Allen Products",
    description: "Countersunk Allen bolts available in sizes M3 - M24.",
    image: "/Allen Products/CSK Allen Bolts M3 M24.webp",
  },
  {
    id: 79,
    name: "CSK Allen Bolts UNC 3/16\" - 1\"",
    category: "Allen Products",
    description: "Countersunk Allen bolts in UNC sizes 3/16\" - 1\".",
    image: "/Allen Products/CSK Allen Bolts UNC.jpeg",
  },
  // ✅ Washers
  {
    id: 80,
    name: "Zinc Plated & Black Flat Washer D125 M3 - M75",
    category: "Washers",
    description: "Durable zinc plated and black flat washers in sizes M3 to M75.",
    image: "/Washers/Zinc plated & Black Flat Washer D125 M3-M75.avif",
  },
  {
    id: 81,
    name: "Zinc Plated Body Washer M3 - M50",
    category: "Washers",
    description: "High-quality zinc plated body washers in sizes M3 to M50.",
    image: "/Washers/Zinc plated Body Washer M3-M50.jpg",
  },
  {
    id: 82,
    name: "Zinc Plated & Stainless Steel Star Washers Internal/External M3 - M30",
    category: "Washers",
    description: "Internal and external star washers in zinc plated and stainless steel, sizes M3 to M30.",
    image: "/Washers/Zinc plated & St Steel Star Washers Internal-External M3-M30.avif",
  },
  {
    id: 83,
    name: "Zinc Plated & Black Spring Washer M3 - M6",
    category: "Washers",
    description: "Spring washers in zinc plated and black finishes, sizes M3 to M6.",
    image: "/Washers/Zinc plated & Black spring Washer M3-M6.avif",
  },
  {
    id: 84,
    name: "Conical Spring Washer M12 - M22",
    category: "Washers",
    description: "High-strength conical spring washers in sizes M12 to M22.",
    image: "/Washers/Conical Spring Washer M12-M22.webp",
  },
  {
    id: 85,
    name: "'V' Cup Type Star Washer (External only)",
    category: "Washers",
    description: "External only 'V' cup type star washers for locking applications.",
    image: "/Washers/_V_ cup type Star Washer (External only).jpg",
  },
  {
    id: 86,
    name: "YP Contact Washers Type P & M - M3 to M30",
    category: "Washers",
    description: "YP contact washers Type P & M in sizes M3 to M30.",
    image: "/Washers/YP Contact Washers Type P & M - M3 to M30.jpg",
  },
  {
    id: 87,
    name: "Steel & Stainless Steel Neoprene Bonded Washer",
    category: "Washers",
    description: "Bonded neoprene washers in steel and stainless steel.",
    image: "/Washers/Steel & St Steel Neoprene Bonded Washer.jpg",
  },
  {
    id: 88,
    name: "Stainless Steel, Brass & Copper Flat Washer",
    category: "Washers",
    description: "Flat washers available in stainless steel, brass, and copper.",
    image: "/Washers/St Steel, Brass & Copper Flat washer.avif",
  },
  {
    id: 89,
    name: "Round Star Lock Washer",
    category: "Washers",
    description: "Round star lock washers for secure fastening.",
    image: "/Washers/Round Star Lock Washer.webp",
  },
  {
    id: 90,
    name: "Hex Lock Washer",
    category: "Washers",
    description: "Durable hexagonal lock washers for mechanical applications.",
    image: "/Washers/Hex Lock Washer.jpeg",
  },
  {
    id: 91,
    name: "Square Allen Spring Washer MS & Stainless Steel",
    category: "Washers",
    description: "Square Allen spring washers in mild steel and stainless steel.",
    image: "/Washers/Square Allen Spring Washer MS & St. Steel.webp",
  },
  {
    id: 92,
    name: "Square Taper Washer",
    category: "Washers",
    description: "Square taper washers designed for structural and mechanical applications.",
    image: "/Washers/Square Taper washer.jpg",
  },

  // Structural Fasteners Category
  {
    id: 93,
    name: "8.8 Hot Dipped Galvanized Bolts (HDG)",
    category: "Structural Fasteners",
    description: "High-strength 8.8 grade hot-dipped galvanized bolts providing superior corrosion resistance.",
    image: "/Structural Fasteners/8.8 Hot Dipped Galvanized Bolts (HDG).jpg",
  },
  {
    id: 94,
    name: "HDG ASTM A325 Bolts, A563 Nuts, F436 Washers",
    category: "Structural Fasteners",
    description: "ASTM A325 standard HDG bolts with A563 nuts and F436 washers, ideal for heavy structural assemblies.",
    image: "/Structural Fasteners/HDG ASTM A325 Bolts.avif",
  },
  {
    id: 95,
    name: "HDG ASTM A490 Bolts, CL10S Nuts, F436 Washers",
    category: "Structural Fasteners",
    description: "High-tensile ASTM A490 bolts with CL10S nuts and F436 washers for critical connections.",
    image: "/Structural Fasteners/HDG ASTM A490 Bolts.jpeg",
  },
  {
    id: 96,
    name: "Shear Studs Connectors (Welding Studs)",
    category: "Structural Fasteners",
    description: "Shear studs designed for composite construction and welding applications.",
    image: "/Structural Fasteners/Shear Studs Connectors (Welding Studs) Anchor Bolts.jpg",
  },
  {
    id: 97,
    name: "Anchor Bolts (Gr. 4.6, 8.8; HDG & Black Finish)",
    category: "Structural Fasteners",
    description: "Anchor bolts available in Grade 4.6 and 8.8 with hot-dipped galvanized and black finishes.",
    image: "/Structural Fasteners/Anchor Bolts (Gr. 4.6, 8.8; HDG & Black Finish).avif",
  },
  {
    id: 98 ,
    name: "Tensile Control Bolts",
    category: "Structural Fasteners",
    description: "Precision-engineered tension control bolts for secure and reliable structural joints.",
    image: "/Structural Fasteners/Tensile Control Bolts.jpg",
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
