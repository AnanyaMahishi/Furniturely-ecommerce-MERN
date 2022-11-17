import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MyCart from './MyCart';
import Checkout from './screens/Checkout';
import LivingRoom from './screens/LivingRoom';
import Dining from './screens/Dining';
import BedRoom from './screens/BedRoom';
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
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/livingroom" element={<LivingRoom/>} />
          <Route path="/dining" element={<Dining/>} />
          <Route path="/bedroom" element={<BedRoom/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
