import { useState } from "react"
import { Link } from "react-router-dom"
import "./LoginScreen.css"

const Signup=()=>{
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[password,setPassword]=useState('') 
    const handleSubmit= async(e)=>{
        e.preventDefault()
        console.log(name,email,phone,password)  
    }
   return(
        
        <section className="sign-up">
            <div class="container">
                <div className="signup-content">

                    <div className="login-image">
                        <figure>
                            <img id="login_img" class="signup_img" src={require("./signup_img.png")} alt="signup_img"/>
                        </figure> 
                    </div> 

                    <div className="signup-form">
                        <h3 className="form-title">Sign Up Now!</h3><br/>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div class="form-outline w-50">
                                    <input type="text" placeholder="Name" class="form-control" onChange={(e)=>setName(e.target.value)} value={name}/><br/>
                                    <input type="email" placeholder="Email" class="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>
                                    <input type="number" placeholder="Phone No." class="form-control" onChange={(e)=>setPhone(e.target.value)} value={phone}/><br/>
                                    <input type="password" placeholder="Password" class="form-control" onChange={(e)=>setPassword(e.target.value)} value={password}/><br/>
                                    <button class="btn btn-dark">Register</button>
                                </div> 
                            </div>
                        </form>
                        <br/>
                        <Link to="/login"className="signup-image-link">Already have a Furniturely account? Login here!</Link> 
                    </div>

                   
                    
                </div>      
            </div>
        </section>
        
    
   ) 
}

export default Signup