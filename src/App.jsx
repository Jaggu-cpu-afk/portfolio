import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <BrowserRouter>
      <ParticlesBackground />
      <CustomCursor />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
      <ChatWidget />
    </BrowserRouter>
  );
}

export default App;
