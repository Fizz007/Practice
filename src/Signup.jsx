import React, { useState } from 'react'

const Signup = (props) => {
    const [val, setValue] = useState({
        name: "",
        email: "",
        pass: "",
        npass: "",

    })

    const [error, setError] = useState(" ");
    // const [email, setemail] = useState('');
    // const [pass, setpass] = useState('');
    // const [name, setname] = useState('');

    function inputChange(e){
        // const {name,email,pass,npass}= e.target
        setValue({
            ...val,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!val.name || !val.email || !val.pass || !val.npass) {
            setError("Some fields are missing")
        }
        else if (val.name.match("^[a-z]{7,29}$")) {
            setError("Name is not Valid")
        }
        else if (val.pass !== val.npass) {
            setError("Password doesn't match")
        }
        else if (val.email.match("/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/")) {
            setError("Email id is invalid")
        }
        else {
            setError("Form is Submitted")
        }

    }

    return (
        <div className="auth-form-container">
            <h2>SignUp</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor='user'>Username</label>
                <input type="text" required name="name" id="user" placeholder='Enter your name' onChange={inputChange} value={val.name} />

                <label htmlFor="mail">Email</label>
                <input type="password" required name="email" id="mail" placeholder='youremail@gmail.com' onChange={inputChange} value={val.email} />

                <label htmlFor="pass">Password</label>
                <input type="password" required name="pass" id="pass" placeholder='*******' onChange={inputChange} value={val.pass} />

                <label htmlFor="npass">NewPassword</label>
                <input type="password" required name="npass" id="npass" placeholder='*******' onChange={inputChange} value={val.npass} />

                <div className='error'>{error}</div>
                <button type="submit" onClick={handleSubmit}>Sign Up</button>
            </form >
            <button className="link-btn" onClick={() => props.onForm('login')}>Already have an account? Login here</button>
        </div>
    )
}

export default Signup;
