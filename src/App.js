import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";


function App() {
  return (
    <div className="App">
    <Navbar />
   <Routes>
     <Route path="/"element={<Home />} />
     <Route path="/about"element={<About />} />
     <Route path="/service"element={<Service />} />
     <Route path="/contact"element={<Contact />} />
     <Route path="/testimonials"element={<Testimonials />} />
   </Routes>
    </div>
  );
}

export default App;
