import { useState } from 'react';
import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import "./Checkout.css"
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const[address,setAddress]=useState('')
    const[city,setCity]=useState('') 
    const[country,setCountry]=useState('') 
   

    const navigate = useNavigate();
    const payHandler = async(e)=>{
        e.preventDefault()
        console.log(address,city,country)
        navigate('/final', { state: {addr : address,city:city,country:country }});
    };

    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
      } = usePaymentInputs();


    return(
        <div>
            <div class=" d-flex justify-content-center">
                <div >
                    <img id="check_img" src={require("./checkout.png")} alt="checkout_img"/>
                </div>

            <form className="register-form" onSubmit={payHandler}>
            <br/><br/><br/>
                <h2>Checkout</h2>
                <br/>
                <div className="form-group">
                    <div class="md-form md-outline w-100" >
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Address" onChange={(e)=>setAddress(e.target.value)} value={address} required/>
                            <label for="floatingInput">Address</label>
                        </div>
                        
                    
                    <div class="row g-3">
                            <div class="col-sm-6">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="City" onChange={(e)=>setCity(e.target.value)} value={city}  required/>
                                    <label for="floatingPassword">City</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <select  class="form-control form-control-lg" id="inlineFormCustomSelectPref" onChange={(e)=>setCountry(e.target.value)} required>
                                    <option selected>Country</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                </select>
                            </div>
                    </div>

                        <PaymentInputsWrapper class="form-control-lg" {...wrapperProps}>
                        <svg {...getCardImageProps({ images })} />
                        <input {...getCardNumberProps()} />
                        <input {...getExpiryDateProps()} />
                        <input {...getCVCProps()} />
                        </PaymentInputsWrapper>
                        <br/><br/>
                        <button class="btn btn-dark btn-lg rounded-pill"  onClick={payHandler}>Proceed to Pay</button>
                    </div> 
                </div>
            </form>
            </div>
        </div>
    )
}
export default Checkout ;