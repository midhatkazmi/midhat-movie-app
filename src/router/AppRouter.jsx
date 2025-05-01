import {BrowserRouter, Routes, Route} from "react-router-dom";
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageSingleMovie from "../pages/PageSingleMovie";

function AppRouter() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/movie/:id" element={<PageSingleMovie />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default AppRouter