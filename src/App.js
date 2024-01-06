// Components Import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages Import
import Home from "./pages/Home";
import About from "./pages/About";
import Brands from "./pages/Brands";
import BrandINFO from "./pages/BrandINFO";

// Router Import
import { Route , Routes } from "react-router";


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brand/:id" element={<BrandINFO />} />
        </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
