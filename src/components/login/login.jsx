import styles from "./login.module.css"
import LoginItems from "./login-items/LoginItems.jsx"

export default function Login () {
    return (
        <div className={styles.container}>
            <LoginItems/>
        </div>
    )
}