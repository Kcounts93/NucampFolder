import { Routes, Route } from "react-router-dom";
// import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
// import CampsiteDetailPage from "./pages/CampsiteDetailPage";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";
// import HomePage from "./pages/HomePage";
import {
  CampsitesDirectoryPage,
  CampsiteDetailPage,
  ContactPage,
  AboutPage,
  HomePage,
} from "./pages";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Header, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
