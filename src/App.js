// Style Import
import "./App.css";

// Components Import
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PopularBrand from "./components/PopularBrand";
import PopularProducts from "./components/PopularProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <PopularBrand />
        <PopularProducts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
