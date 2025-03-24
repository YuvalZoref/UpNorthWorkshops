import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import WhatWeOffer from './pages/WhatWeOffer'
import About from './pages/About'
import Contact from './pages/Contact'
import Errorpage from './pages/ErrorPage'
import ScrollToTop from "../src/components/scrollToTop";

export default function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/WhatWeOffer" element={<WhatWeOffer />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </div>
  );
}
