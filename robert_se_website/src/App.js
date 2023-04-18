import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Route,  Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path= "/">
        <Route index element={<Home />}/>
        </Route>
       
      <Route path= "/About" element={<About />}/>
      <Route path= "/Contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
