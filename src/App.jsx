import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import ContactPage from "./pages/Contact.jsx";
import ProductsPage from "./pages/Products.jsx";
import Header from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Downloads from "./pages/Downloads.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/downloads" element={<Downloads />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
