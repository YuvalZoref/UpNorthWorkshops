import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Errorpage from './pages/ErrorPage'
import ScrollToTop from "../src/components/scrollToTop";

export default function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="#/About" element={<About />} />
          <Route path="#/Team" element={<Team />} />
          <Route path="#/Contact" element={<Contact />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </div>
  );
}
