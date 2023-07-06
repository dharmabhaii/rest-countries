import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading';
import Filters from './components/Filters';
import Home from './pages/Home';
import Countrypage from './pages/Countrypage';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:countryname' element={<Countrypage />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
