import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Educations from './pages/Educations';
import Project from './pages/Project';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Projectdetail from './pages/Projectdetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/educations" element={<Educations />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutproject" element={<Projectdetail/>} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
