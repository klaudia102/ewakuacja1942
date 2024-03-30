
import './App.css';
import * as bootstrap from 'bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar  from './components/Navbar/index';
import Home from './pages/Home/index'
import Search from './pages/search/index';
import History from './pages/history/index';
import Contact from './pages/contact/index';


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
