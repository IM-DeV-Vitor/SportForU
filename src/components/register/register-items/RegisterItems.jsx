import styles from "./register-items.module.css"
import imageLogo from "/assets/logo.jpg"
import { Link, useNavigate } from "react-router-dom";
import {  useState } from "react"
import Alert from "../../main/alerts/alert-container";
import Loader from "react-js-loader"

export default function RegisterItems() {
    const navigate = useNavigate()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Fullname, setFullname] = useState("")
    const [ConfirmedPassword, setConfirmedPassword] = useState("")
    const [alertMessage, setAlertMessage] = useState("");
    const [alertVisible, setAlertVisible] = useState(false);
    const [contentLoading, setContentLoading] = useState(false);


    const handleRegister = async (e) => {
        e.preventDefault()
        setContentLoading(true)
        if (Fullname == "" || Email == "" || Password == "") {
            setAlertMessage("É preciso preencher todos os campos!")
            setAlertVisible(true)
            return setContentLoading(false)
        }else if (Password != ConfirmedPassword) {
            setAlertMessage("As senhas não conhecidem")
            setAlertVisible(true)
            return setContentLoading(false)
        }else if (Password.length < 5){
            setAlertMessage("A senha deve ter no mínimo 6 caracteres")
            setAlertVisible(true)
            return setContentLoading(false)
        }
        try {
            const response = await fetch("https://sportforu-backend.onrender.com/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: Fullname,
                    email: Email,
                    password: Password
                })
            });
            const data = await response.json();
            setContentLoading(true)
    
            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("email", Email);

                navigate("/")
                setContentLoading(false)
            } else {
                setAlertMessage(data.message || "Register failed");
                setAlertVisible(true)
                setContentLoading(false)
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
                    <button onClick={handleRegister}>
                        {contentLoading ? <Loader
                        className={styles.contentLoader}
                        type="box-rectangular"
                        bgColor={"#FFFFFF"}
                        color={"#FFFFFF"}
                        size={20}
                        /> 
                        : 
                        "Register"}
                    </button>
                    <Alert
                        message={alertMessage}
                        style={{ display: alertVisible ? "flex" : "none" }}
                        onClose={() => setAlertVisible(false)}
                    />
                    <Link to={"/auth/login"}>Already have an account?</Link>
                </div>
            </div>
    ) 
}