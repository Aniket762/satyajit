import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/index';
import About from './pages/about/about';
import Photos from "./pages/photos/photos";
import Blogs from "./pages/blogs/blogs";
import Footer from './components/Footer/footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/photos' component={Photos} />
        <Route path='/blogs' component={Blogs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
