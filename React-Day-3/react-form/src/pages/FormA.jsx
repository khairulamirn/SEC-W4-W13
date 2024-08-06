import Header from "../components/Header"
import { useState } from "react";

export const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    allignItems: 'center',
    margin: '0 auto',
    marginTop: '50px',
    width: 'fit-content',
    padding: "10px",
    gap: "10px",
    border: "1px solid black",
    borderRadius: "10px",
}

export const inputContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '10px',
}

function FormA() {

    // email useStates
    const [email, setEmail] =useState('');
    // password useStates
    const [password, setPassword] =useState('');
    // confirm password useStates
    const [confirmPassword, setConfirmPassword] =useState('');

    // handle submit function
    function handleSubmit() {
        if (password !== confirmPassword) {
            alert('Password and Confirm Password does not match');
            return;
        }
        console.log("Form Submitted");
        const data = {
            email,
            password,
            confirmPassword
        };
        console.log(data);
    }

    // handle email input change
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    // handle password input change
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    // handle confirm password input change
    function handleConfirmPasswordChange(event) {
        setConfirmPassword(event.target.value);
    }

    return(
        <div>
            <Header />
            <h1>Form A</h1>
            <div style={formContainerStyle}>
                <h4>Register</h4>
                <div style={inputContainer}>
                    <label htmlFor="name">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Insert Your Email"
                    onChange={handleEmailChange}
                    />
                </div>
                <div style={inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Insert Your Password"
                    onChange={handlePasswordChange}
                    />
                </div>
                <div style={inputContainer}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword" 
                    placeholder="Confirm Your Password"
                    onChange={handleConfirmPasswordChange}
                    />
                </div>
                <button onClick={handleSubmit}>Register</button>
            </div>
        </div>
    )
}

export default FormA