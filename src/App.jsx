import './App.scss';
import { useLayoutEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
import AllProjects from "./Project/AllProjects";
import About from './About/About';
import Service from './Service/Service';

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  
  return (
    <>
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/allproject" element={<AllProjects />} />
            <Route path="/project/:name" element={<Project />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
