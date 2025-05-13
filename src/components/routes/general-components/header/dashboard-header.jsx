import styles from "./dashboard-header.module.css"
import imageLogo from "/assets/logo.jpg"

export default function DashboardHeader () {
    return (
        <div className={styles.supremeFather}>
            <div className={styles.container}>
                <div><img src={imageLogo} alt="Logo"  className={styles.icon}/></div>
                <h1>Home</h1>
                <div className={styles.profile}>
                </div>
            </div>
            <nav>                    
                <ul>
                    <li>Home</li>
                    <li>Streaks</li>
                    <li>Status</li>
                </ul>
            </nav>
        </div>
    )
}