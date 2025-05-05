import styles from "./login-items.module.css"
import imageLogo from "/assets/logo.jpg"

export default function LoginItems() {
    console.log("Login Items loaded")
    return ( 
            <div className={styles.container}>
                <img src={imageLogo} alt="Logo SportForU" id={styles.logo}/>
                <h1>Login</h1>
                <div className={styles.inputsContainer}>
                    <input type="email" name="email" id={styles.email} required placeholder="Email: "/>
                    <input type="password" name="password" id={styles.password} required placeholder="Password: "/>
                    <button>Login</button>
                </div>
        </div>
    ) 
}