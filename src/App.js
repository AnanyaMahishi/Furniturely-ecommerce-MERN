import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/login" element={<LoginScreen/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
