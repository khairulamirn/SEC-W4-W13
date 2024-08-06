import Header from "../components/Header"
import { inputContainer, formContainerStyle } from "./FormA"
import { useState } from "react";

function FormB() {

    const [data, setData] = useState({});

    // handle submit function
    function handleSubmit() {
        if (data.password !== data.confirmPassword) {
            alert('Password and Confirm Password does not match');
            return;
        }
        console.log(data);
    }

    // handleChange
    function handleChange(e) {
        // we need to update the data state with new key-value pair
        const value = e.target.value;
        const key = e.target.name;
        const object = {[key]: value};

        // we use spread operator to update the data state
        setData({...data, ...object});
        console.log(data);
    }

    return(
        <div>
            <Header />
            <h1>Form B</h1>
            <div>
                <div style={formContainerStyle}>
                    <h4>Register</h4>
                    <div style={inputContainer}>
                        <label htmlFor="name">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Insert Your Email"
                        onChange={handleChange}
                        />
                    </div>
                    <div style={inputContainer}>
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Insert Your Password"
                        onChange={handleChange}
                        />
                    </div>
                    <div style={inputContainer}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPassword" 
                        placeholder="Confirm Your Password"
                        onChange={handleChange}
                        />
                    </div>
                    <button onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default FormB