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
            <div class="container" id="l_c">
                <div className="signin-content" class="row d-flex justify-content-center align-items-center">
            
                <div class="form d-flex justify-content-between">
                    <div className="login-image" >
                        <figure>
                            <img id="login_img" class="login_img" src={require("./login_img.png")} alt="login_img"/>
                        </figure> 
                    </div> 
                    <div class="card-body p-5 shadow-5">
                    <div className="login-form" class="form">
                        <h3 className="form-title">Login into your account</h3><br/>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div class="md-form md-outline">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                    <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                                    <label for="floatingPassword">Password</label>
                                    </div>
                                    <br/>
                                    <button class="btn btn-dark btn-lg rounded-pill">Login</button>
                                </div> 
                            </div>
                        </form>
                        <br/>
                        <Link to="/signup"className="signup-image-link">Do not have a Furniturely account? Create one now!</Link> 
                    </div>
                    </div>
                </div>
                </div>
                    
                </div>      
           
        </section>
        
    
   ) 
}

export default Login