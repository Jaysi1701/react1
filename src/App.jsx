import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Employees from "./pages/Employees";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/employees"
            element={<Employees />}
          />

          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;