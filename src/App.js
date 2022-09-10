import React from 'react';
import './App.css';
import About from './Routes/about';
import Home from './Routes/home';
import Nav from './Routes/nav';
import Team from './Routes/team';
import Contact from './Routes/contact';
import { BrowserRouter as Router, Switch, Route,Routes} from 'react-router-dom'
import Footer from './Routes/footer';


function App() {
  return (
          <Router>
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/team" element={<Team/>}/>
      </Routes>
      <Footer/>


    </div>
          </Router>
  );
}

export default App;
