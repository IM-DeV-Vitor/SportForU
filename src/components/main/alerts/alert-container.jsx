import styles from "./alert-container.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { TbAlertTriangle } from "react-icons/tb";

export default function Alert({ style = {}, onClose, message }) {
    return (
        <div
            className={styles.alertBox}
            style={{
                position: "fixed",
                top: "85%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                justifyContent: "center",
                flexDirection: "column",
                fontFamily: "Arial, Helvetica, sans-serif",
                textAlign: "justify",
                color: "white",
                padding: "20px 20px 40px 20px",
                backgroundColor: "black",
                width: "85vw",
                border: "1px solid white",
                borderRadius: "15px",
                zIndex: 10,
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                display: "block",
                ...style,
            }}
        >
            <div className={styles.icon}>
                <AiOutlineClose onClick={onClose} style={{ cursor: "pointer" }} />
            </div>
            <h1 style={{ color: "white" }} >Alerta <TbAlertTriangle className={styles.triangleIcon}/></h1>
            
            <p>{message}</p>
        </div>
    );
}
