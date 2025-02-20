import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SocialBar from "./components/SocialBar";
import Catergories from "./components/Catergories";
import Products from "./components/Products";

function App() {
  return (
    <>
      <SocialBar />
      <Navbar />
      <HeroSection />
      <Catergories />
      <Products />
    </>
  );
}

export default App;
