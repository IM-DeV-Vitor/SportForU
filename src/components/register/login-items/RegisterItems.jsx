import styles from "./register-items.module.css"
import imageLogo from "/assets/logo.jpg"
import { Link, useNavigate } from "react-router-dom";
import {  useState } from "react"

export default function RegisterItems() {
    const navigate = useNavigate()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Fullname, setFullname] = useState("")
    const [ConfirmedPassword, setConfirmedPassword] = useState("")
 //https://sportforu-backend.onrender.com/auth/register


    const handleRegister = async (e) => {
        e.preventDefault()
        if (Password != ConfirmedPassword) {
            return alert("Senhas não conhecidem")
        } else if (Password.length < 5){
            return alert("Senha muito curta")
        }
        try {
            const response = await fetch("http://localhost:8080/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: Fullname,
                    email: Email,
                    password: Password
                })
            });
            const data = await response.json();
    
            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("email", Email);
    
                alert("Register successfuly");
                navigate("/")
            } else {
                alert("Register failed: " + data.message);
            }
        } catch (error) {
            console.error("Error during register:", error);
        }
    };

    return ( 
            <div className={styles.container}>
                <h1>Register</h1>
                <img src={imageLogo} alt="Logo SportForU" id={styles.logo}/>
                
                <div className={styles.inputsContainer}>
                    <div className={styles.inputsContainer}>
                        <input type="text" name="text" id={styles.fullname} required placeholder="Fullname: "
                        value={Fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    </div>
                    <input type="email" name="email" id={styles.email} required placeholder="Email: "
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="text" name="password" id={styles.password} required placeholder="Password: "
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="text" name="confirm-password" id={styles.confirm_password} required placeholder="Confirm Password: "
                        value={ConfirmedPassword}
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                        onKeyDownCapture={(e) => {
                            if(e.key === "Enter") {
                                handleRegister(e)
                            }
                        }}
                    />
                    <button onClick={handleRegister}>Register</button>
                    <Link to={"/auth/login"}>Alright have an account?</Link>
                </div>
            </div>
    ) 
}