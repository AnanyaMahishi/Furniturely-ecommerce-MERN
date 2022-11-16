import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MyCart from './MyCart';
//import LivingRoom from './screens/LivingRoom';
function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/signup" element={<SignupScreen/>} />
          <Route path="/mycart" element={<MyCart/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
