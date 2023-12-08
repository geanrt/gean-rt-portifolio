import {Route, Routes, useLocation} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./components/page/footer/Footer";
import Header from "./components/page/header/Header";
import About from "./pages/about/About";
import Missing from "./pages/Missing/Missing";
import Shortly from "./pages/Shortly/Shortly";
import {useEffect} from "react";


function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on every route change
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/terms" element={<Shortly />} /> */}
          {/* <Route path="/team" element={<Shortly />} /> */}
          <Route path="*" element={<Missing />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
