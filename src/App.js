import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import { Carousel } from './Carousel.tsx';
import Timer from './Timer';
import Animation from './Animation';
import Stickynotes from './Stickynotes';

function App() {  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Timer' element={<Timer />} />
        <Route path = '/Animation' element={<Animation />}/>
        <Route path = '/Stickynotes' element={<Stickynotes />}/>
        <Route path='/Carousel.tsx' element={<Carousel />} />
      </Routes>
    </div>
  );
}

export default App;
