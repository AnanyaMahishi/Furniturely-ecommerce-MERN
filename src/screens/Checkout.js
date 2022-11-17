import { useState } from 'react';
import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import "./Checkout.css"

function Checkout() {
    const[address,setAddress]=useState('')
    const[city,setCity]=useState('') 
    const handleSubmit= async(e)=>{
        e.preventDefault()
        console.log(address,city)  
    }

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

            <form className="register-form" onSubmit={handleSubmit}>
            <br/><br/><br/>
                <h2>Checkout</h2>
                <br/>
                <div className="form-group">
                    <div class="md-form md-outline w-100" >
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Address" onChange={(e)=>setAddress(e.target.value)} value={address}/>
                            <label for="floatingInput">Address</label>
                        </div>
                        
                    
                    <div class="row g-3">
                            <div class="col-sm-6">
                                <select  class="form-control form-control-lg" id="inlineFormCustomSelectPref">
                                    <option selected>Country</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="City" onChange={(e)=>setCity(e.target.value)} value={city}/>
                                    <label for="floatingPassword">City</label>
                                </div>
                            </div>
                    </div>

                        <PaymentInputsWrapper class="form-control-lg" {...wrapperProps}>
                        <svg {...getCardImageProps({ images })} />
                        <input {...getCardNumberProps()} />
                        <input {...getExpiryDateProps()} />
                        <input {...getCVCProps()} />
                        </PaymentInputsWrapper>
                        <br/><br/>
                        <button class="btn btn-dark btn-lg rounded-pill">Proceed to Pay</button>
                    </div> 
                </div>
            </form>
            </div>
        </div>
    )
}
export default Checkout ;