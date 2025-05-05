import styles from "./login-items.module.css"
import imageLogo from "/assets/logo.jpg"
import { useEffect, useState } from "react"

export default function LoginItems() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: Email,
                    password: Password
                })
            })
            const data = await response.json();

            if (response.ok) {
                alert("Login successful:", data.message)
                console.log("Login successful:", data.message);
            } else {
                console.error("Login failed:", data.message);
                alert("Login failed:", data.message)
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
                    <input type="password" name="password" id={styles.password} required placeholder="Password: "
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={handleLogin}>Login</button>
                </div>
        </div>
    ) 
}