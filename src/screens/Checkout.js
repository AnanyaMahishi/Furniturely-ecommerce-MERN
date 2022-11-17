import { useState } from 'react';
import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

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
            
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div class="md-form md-outline w-25" >
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Address" onChange={(e)=>setAddress(e.target.value)} value={address}/>
                        <label for="floatingInput">Address</label>
                        </div>
                        
                        <br/>
                        <div class="form-row align-items-center">
                            <div class="col-auto my-1">
                            
                            <select  class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Country</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                            <div class="col-auto my-1">
                            <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="City" onChange={(e)=>setCity(e.target.value)} value={city}/>
                        <label for="floatingPassword">City</label>
                        </div>
                        </div>
                        </div>

                        <PaymentInputsWrapper {...wrapperProps}>
                        <svg {...getCardImageProps({ images })} />
                        <input {...getCardNumberProps()} />
                        <input {...getExpiryDateProps()} />
                        <input {...getCVCProps()} />
                        </PaymentInputsWrapper>
                        <br/>
                        <button class="btn btn-dark btn-lg rounded-pill">Proceed to Pay</button>
                    </div> 
                </div>
            </form>
           
        </div>
    )
}
export default Checkout ;