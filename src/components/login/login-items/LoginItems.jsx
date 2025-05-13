import styles from "./login-items.module.css"
import imageLogo from "/assets/logo.jpg"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  useState } from "react"
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Alert from "../../main/alerts/alert-container.jsx";
import Loader from "react-js-loader"

export default function LoginItems() {
    const navigate = useNavigate()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertVisible, setAlertVisible] = useState(false);
    const [contentLoading, setContentLoading] = useState(false)

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setContentLoading(true)
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
                navigate("/")
                setContentLoading(false)
            } else {
                setAlertMessage(data.message || "Erro ao fazer login");
                setAlertVisible(true)
                setContentLoading(false)
            }
        } catch (error) {
            setAlertMessage("Erro de conexão com o servidor");
            setAlertVisible(true);
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
                        }}
                        onKeyDownCapture={(e) => {
                            if(e.key === "Enter") {
                                handleLogin(e)
                            }
                        }}
                        className={styles.passwordInput}/>

                        <div
                            onClick={togglePasswordVisibility}
                            className={styles.eyeIcon}
                        >
                           { showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                        </div>
                    </div>
                    <button onClick={handleLogin}>
                        {contentLoading ? <Loader
                        className={styles.contentLoader}
                        type="box-rectangular"
                        bgColor={"#FFFFFF"}
                        color={"#FFFFFF"}
                        size={20}
                        /> 
                        : 
                        "Login"}
                    </button>
                    <Alert
                        message={alertMessage}
                        style={{ display: alertVisible ? "flex" : "none" }}
                        onClose={() => setAlertVisible(false)}
                    />
                    <Link to={"/auth/register"}>Haven't an account?</Link>
                </div>
            </div>
    ) 
}