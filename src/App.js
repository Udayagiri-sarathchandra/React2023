import './App.css';
import About from './components/About';
import Courses from './components/Courses';
import Home from './components/Home';
import Header from './shared/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>


      <div >
        <Router>
          <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
