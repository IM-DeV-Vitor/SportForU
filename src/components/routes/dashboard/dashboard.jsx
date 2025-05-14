import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../general-components/header/dashboard-header.jsx";
import styles from "./dashboard.module.css"
import ContentBox from "../general-components/contents/content-box"
import styless from "../general-components/contents/content-box.module.css"

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
            <div className={styles.father}>
            <div className={styless.container}>
                        <ContentBox groundColor="#0fabfe" titleContent = "Lorem 1"
                        textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde consectetur qui cumque a ea placeat doloribus temporibus accusantium, porro hic dolorum quasi quos, in earum culpa dicta aperiam voluptates optio."
                        />

                        <ContentBox groundColor="#ff432f"
                        titleContent="Lorem 2"
                        textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit.Eum aperiam, enim quaerat adipisci atque voluptatum cum repellat, reprehenderit excepturi fugiat dolorem voluptate nulla quae alias! Officiis mollitia illo iure tenetur!"
                        />

                        <ContentBox groundColor="#0fabfe"
                        titleContent="Lorem 3"
                        textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia corporis architecto dolorem laboriosam illo aliquid repudiandae delectus magni doloribus rem, eaque veniam sint magnam obcaecati quisquam voluptate repellendus voluptatibus."
                        />

                        <ContentBox groundColor="#ff432f"
                        titleContent="Lorem 4"
                        textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas atque earum laboriosam illo sapiente velit perspiciatis expedita hic ipsa obcaecati, necessitatibus vel debitis ullam assumenda placeat. Praesentium libero unde quibusdam."
                        />
                </div>
            </div>
            <button style={{marginTop:"64.2vh", display: "block", margin:"30px auto"}}onClick={() => {
                localStorage.clear();
                navigate("/auth/login");
            }}>
                Logout
            </button>
        </div>
    );
}
