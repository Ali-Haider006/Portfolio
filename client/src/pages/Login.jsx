import '../App.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
export const Login = ()=>{
    const navigate = useNavigate();

    const [user, setUser] = useState(
        { 
         email : "",
        
         password:""}
     );
 
     const handleInput = (e)=>{
         let name = e.target.name;     // Syntax: e.target.{name of input tag}
         let value= e.target.value;
         console.log(name+value);
         setUser({
             ...user,
             [name]:value,
            })
        }
        
        const storeTokenInLS = (serverToken) =>{
            return localStorage.setItem('token',serverToken);
        } ;
     const HandleForm = async(e)=>{
         e.preventDefault();
        //  alert(user);
        try {
            const response = await fetch('http://localhost:5000/api/auth/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
        }
        );
        if (response.ok) {
            setUser({ 
            email : "",
            password:""}
            
            );
        storeTokenInLS(response.json().token);
        alert("Login successful");
        navigate("/");
        }else{
            alert("Invalid email or password")
        } }
        catch (error) {
            console.log("register", error);
        }
     };
    return <>
    <h1>Login page</h1>
    <section>
        <main>
            <div>
                <form action="" onSubmit={HandleForm}>
                <div>
                            <label htmlFor="email">email</label>
                            <input type="email" name='email'  placeholder='email' id='email' required autoComplete='off' value={user.email} onChange={handleInput}/>
                </div>

                <div>
                            <label htmlFor="password">password</label>
                            <input type="password" name='password'  placeholder='password' id='password' required autoComplete='off' value={user.password} onChange={handleInput}/>
                </div>
                <br />
                         <button type='submit' className="btn btn-submit">Login</button>   
                </form>
            </div>
        </main>
    </section>
    </>
}