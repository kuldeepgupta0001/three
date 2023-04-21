import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./compononet/Header";
import Home from "./compononet/Home";
import Coins from "./compononet/Coins";
import CoinDetails from "./compononet/CoinDetails";
import Exchanges from "./compononet/Exchanges";
import Footer from "./compononet/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
