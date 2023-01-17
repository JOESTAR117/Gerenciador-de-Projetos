import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Company from "./pages/Company/Company";
import Contact from "./pages/Contact/Contact";
import NewProject from "./pages/NewProject/NewProject";
import Container from "./components/layout/Container/Container";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/projects" element={<Projects />} />

          <Route path="/company" element={<Company />} />
          
          <Route path="/contact" element={<Contact />} />

          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
