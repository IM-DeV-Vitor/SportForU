import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/auth/login");
        }
    }, []);

    const email = localStorage.getItem("email");

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Dashboard</h1>
            <p style={{textAlign:"justify", color:"white",fontFamily:"Arial", fontSize:"1.6em"}}>Área em desenvolvimento</p>

            <button onClick={() => {
                localStorage.clear();
                navigate("/auth/login");
            }}>
                Logout
            </button>
        </div>
    );
}
