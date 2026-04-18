import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Planner from "./pages/Planner";
import ContactUs from "./pages/ContactUs";
import Results from "./pages/Results";
import Map from "./components/Map";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/map" element={<Map />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;