import { useState } from "react"
import { Link } from "react-router-dom"
import "./LoginScreen.css"

const Login=()=>{
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('') 
   const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log(email,password)  
   }
   return(
        
        <section className="sign-in">
            <div class="container">
                <div className="signin-content">

                    <div className="login-image">
                        <figure>
                            <img id="login_img" class="login_img" src={require("./login_img.png")} alt="login_img"/>
                        </figure> 
                    </div> 

                    <div className="login-form">
                        <br/><br/>
                        <h3 className="form-title">Login into your account</h3><br/>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div class="form-outline w-50">
                                    <input type="email" placeholder="Email" class="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>
                                    <input type="password" placeholder="Password" class="form-control" onChange={(e)=>setPassword(e.target.value)} value={password}/><br/>
                                    <button class="btn btn-dark">Login</button>
                                </div> 
                            </div>
                        </form>
                        <br/>
                        <Link to="/signup"className="signup-image-link">Do not have a Furniturely account? Create one now!</Link> 
                    </div>

                   
                    
                </div>      
            </div>
        </section>
        
    
   ) 
}

export default Login