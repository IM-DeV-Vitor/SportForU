import styles from "./login-items.module.css"
import imageLogo from "/assets/logo.jpg"
import { useNavigate } from "react-router-dom";
import {  useState } from "react"
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

export default function LoginItems() {
    const navigate = useNavigate()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("https://sportforu-backend.onrender.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: Email,
                    password: Password
                })
            });
            const data = await response.json();
    
            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("email", Email);
    
                alert("Login successful");
                navigate("/")
            } else {
                alert("Login failed: " + data.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return ( 
            <div className={styles.container}>
                <h1>Login</h1>
                <img src={imageLogo} alt="Logo SportForU" id={styles.logo}/>
                <div className={styles.inputsContainer}>
                    <input type="email" name="email" id={styles.email} required placeholder="Email: "
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className={styles.passwordWrapper}>
                        <input type={showPassword ? "text" : "password"} name="password" id={styles.password} required placeholder="Password: "
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            padding: "15px",
                            width: "90%",
                        }}
                        onKeyDownCapture={(e) => {
                            if(e.key === "Enter") {
                                handleLogin(e)
                            }
                        }}/>

                        <div
                            onClick={togglePasswordVisibility}
                            className={styles.eyeIcon}
                        >
                           { showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                        </div>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
    ) 
}