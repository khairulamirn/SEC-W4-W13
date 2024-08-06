import Header from "../components/Header"
import { inputContainer, formContainerStyle } from "./FormA"

function FormC() {

    function handleSubmit(event) {
        // Prevent the default form submission
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        if (password !== confirmPassword) {
            alert('Password and Confirm Password does not match');
            return;
        }

        const data = {
            email,
            password,
            confirmPassword
        };
        console.log(data);
    }

    return(
        <div>
            <Header />
            <h1>Form C</h1>
            <div>
                <form onSubmit={handleSubmit} style={formContainerStyle}>
                    <h4>Register</h4>
                    <div style={inputContainer}>
                        <label htmlFor="name">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Insert Your Email"
                        />
                    </div>
                    <div style={inputContainer}>
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Insert Your Password"
                        />
                        {/* <span style={{color: 'red'}}>Password must be at least 8 characters</span> */}
                    </div>
                    <div style={inputContainer}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPassword" 
                        placeholder="Confirm Your Password"
                        />
                    </div>
                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default FormC