import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App