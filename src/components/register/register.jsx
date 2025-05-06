import styles from "./register.module.css"
import RegisterItems from "./register-items/RegisterItems"

export default function Register () {
    return (
        <div className={styles.container}>
            <RegisterItems/>
        </div>
    )
}