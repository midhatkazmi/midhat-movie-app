import {BrowserRouter, Routes, Route} from "react-router-dom";
import PageHome from "../pages/PageHome";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<PageHome />} />
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  );
}

export default AppRouter