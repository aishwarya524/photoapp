import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo from './components/Photos/Photo';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact';
import EnlargedPhoto from './components/EnlargedPhoto';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Photo />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/photos/:id' element={<EnlargedPhoto />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
