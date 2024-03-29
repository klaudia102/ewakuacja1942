
import './App.css';
import * as bootstrap from 'bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar  from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/search';
import History from './pages/History';
import Contact from './pages/Contact';


function App() {
  return (
<>
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </Router>
      
    </div>

    </>
  );
}

export default App;
