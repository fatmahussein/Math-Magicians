import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CalcPage from './components/CalcPage';
import QuotePage from './components/QuotePage';
import Navbar from './components/Nav';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<CalcPage />} />
        <Route path="Quotes" element={<QuotePage />} />
      </Routes>
    </>
  );
}

export default App;
