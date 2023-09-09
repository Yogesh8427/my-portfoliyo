import './App.css';
import About from './component/About.js';
import Contact from './component/Contact';
import Education from './component/Education';
import Navbar from './component/Navbar.js';
import Project from './component/Project';

function App() {
  return (
    <div className="root">
    <Navbar></Navbar>
    <About></About>
    <Project></Project>
    <Education></Education>
    <Contact></Contact>
    </div>
  );
}

export default App;
