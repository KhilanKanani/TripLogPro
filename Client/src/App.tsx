import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import ContactUs from "./pages/ContactUs";
import Results from "./pages/Results";
import Map from "./components/Map";

function Layout() {
  const location = useLocation();

  const isMapPage =
    location.pathname === "/map";

  return (
    <>
      {!isMapPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/map" element={<Map />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;