import { useState } from 'react'
import '../App.css'
export const Register = ()=>{
    const [user, setUser] = useState(
       { username : "",
        email : "",
        phone:"",
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

    const HandleForm = (e)=>{
        e.preventDefault();
        alert(user);
    }

    return <>
    <section>
        <main>
            <div className="section-registration">
            <div className="container grid grid-two-cols">
                <div className="registration-image">
                    <img src="" alt="a girl is trying to do registration" />
                </div>
                <div className="registration-form">
                    <h1 className="main-heading mb-3">registration form</h1>
                    <form onSubmit={HandleForm}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input type="text" name='username'  placeholder='username' id='username' required autoComplete='off' value={user.username} onChange={handleInput}/>
                        </div>

                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" name='email'  placeholder='email' id='email' required autoComplete='off' value={user.email} onChange={handleInput}/>
                        </div>

                        <div>
                            <label htmlFor="phone">phone</label>
                            <input type="number" name='phone'  placeholder='phone' id='phone' required autoComplete='off' value={user.phone} onChange={handleInput}/>
                        </div>

                        <div>
                            <label htmlFor="password">password</label>
                            <input type="password" name='password'  placeholder='password' id='password' required autoComplete='off' value={user.password} onChange={handleInput}/>
                        </div>

                         <br />
                         <button type='submit' className="btn btn-submit">Register</button>   
                            
                    </form>
                </div>
            </div>

            </div>
        </main>
    </section>
    </>
}