import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../general-components/header/dashboard-header.jsx";

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
            <DashboardHeader />
            <button style={{marginTop:"64.2vh"}}onClick={() => {
                localStorage.clear();
                navigate("/auth/login");
            }}>
                Logout
            </button>
        </div>
    );
}
