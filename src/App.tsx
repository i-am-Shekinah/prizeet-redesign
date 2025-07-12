import 'aos/dist/aos.css';

import { useEffect } from 'react';

import AOS from 'aos';
import {
  Route,
  Routes,
} from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
