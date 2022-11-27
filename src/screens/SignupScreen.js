import { useState } from "react"
import { Link } from "react-router-dom"
import "./LoginScreen.css"

const Signup=()=>{
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('') 
    const handleSubmit= async(e)=>{
        e.preventDefault()
        console.log(name,email,password)  
    }
   return(
        
        <section className="sign-up">
            <div class="container" id="l_c">
                <div className="signup-content" class="row d-flex justify-content-center align-items-center">
                <div class="form d-flex justify-content-between">
                    <div className="login-image">
                        <figure>
                            <img id="login_img" class="signup_img" src={require("./signup_img.png")} alt="signup_img"/>
                        </figure> 
                    </div> 
                    <div class="card-body p-5 shadow-5">
                    <div className="signup-form" class="form">
                
                        <h3 className="form-title">Sign Up Now!</h3><br/>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div class="md-form md-outline">
                                    
                                    <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name}/>
                                    <label for="floatingInput">Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                    <label for="floatingInput">Email</label>
                                    </div>
                                    <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                                    <label for="floatingPassword">Password</label>
                                    </div>
                                   <br/>
                                    <button class="btn btn-dark btn-lg btn-block rounded-pill">Register</button>
                                </div> 
                            </div>
                        </form>
                        <br/>
                        <Link to="/login"className="signup-image-link">Already have a Furniturely account? Login here!</Link> 
                    </div>
                    </div>
                    </div>
                    
                </div>      
            </div>
        </section>
        
    
   ) 
}

export default Signup