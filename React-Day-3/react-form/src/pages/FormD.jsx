import Header from "../components/Header";
import { inputContainer, formContainerStyle } from "./FormA"
import { useForm } from "react-hook-form";

function FormD() {

    const { 
        handleSubmit, 
        register, 
        formState: { errors } 
    } = useForm();

    function onSubmit(values) {
        if (values.password !== values.confirmPassword) {
            alert('Password and Confirm Password does not match');
            return;
        }
        alert('Form Submitted');
        console.log(values);
    }

    console.log(errors);
    return (
        <div>
            <Header />
            <h1>Form D</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} style={formContainerStyle}>
                    <h4>Register</h4>
                    <div style={inputContainer}>
                        <label htmlFor="name">Email</label>
                        <input 
                        {...register("email", { 
                            required: "Email is required",

                            }
                        )}
                        type="email"  
                        placeholder="Insert Your Email"
                        />
                        <span>{errors.email?.message}</span>
                    </div>
                    <div style={inputContainer}>
                        <label htmlFor="password">Password</label>
                        <input 
                        {...register("password", { 
                            required: "Password is required",

                            }
                        )}
                        type="password" 
                        placeholder="Insert Your Password"
                        />
                        <span>{errors.password?.message}</span>
                    </div>
                    <div style={inputContainer}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                        {...register("confirmPassword", { 
                            required: "Confirm Password is required",

                            }
                        )}
                        type="password" 
                        placeholder="Confirm Your Password"
                        />
                        <span>{errors.confirmPassword?.message}</span>
                    </div>
                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default FormD