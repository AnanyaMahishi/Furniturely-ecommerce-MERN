import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';



import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Checkout from './screens/Checkout';
import LivingRoom from './screens/LivingRoom';
import Dining from './screens/Dining';
import BedRoom from './screens/BedRoom';
import ProductScreen from './screens/PrdouctScreen';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Moodboard from './screens/moodboard';
import Profile from './screens/Profile';
import Final from './screens/Final';

function App() {

  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
    <ToastContainer position="bottom-center" limit={1} />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/signup" element={<SignupScreen/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/livingroom" element={<LivingRoom/>} />
          <Route path="/dining" element={<Dining/>} />
          <Route path="/bedroom" element={<BedRoom/>} />
          <Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/moodboard" element={<Moodboard/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/final" element={<Final/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
