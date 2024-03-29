import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Resume from './pages/resume';
import Projects from './pages/projects';
import Blog from './pages/blog';
import Contact from './pages/contact';
// import { Navbar } from "./components/navbars/Navbar";
function App() {
  return (
    <>
    {/* <Navbar />     */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
