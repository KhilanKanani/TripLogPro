import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import ContactUs from "./pages/ContactUs";
import Results from "./pages/Results";
import Map from "./components/Map";
import NotFound from "./components/NotFound";

function Layout() {
  const location = useLocation();

  const validRoutes = [
    "/",
    "/planner",
    "/results",
    "/contact-us",
    "/map",
  ];

  const isNotFoundPage = !validRoutes.includes(location.pathname);

  const hideLayout = location.pathname === '/map' || isNotFoundPage;


  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/map" element={<Map />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideLayout && <Footer />}
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