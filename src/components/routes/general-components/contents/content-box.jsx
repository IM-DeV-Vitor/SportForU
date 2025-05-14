import styles from "./content-box.module.css"


export default function ContentBox ({groundColor, titleContent ,textContent}) {
    return (
        <div className={styles.container}>
            <div className={styles.father}>
                <div className={styles.contentContainer} style={{
                    backgroundColor: groundColor,
                }}>
                    <h1>{titleContent}</h1>
                    <p>
                        {textContent}
                    </p>
                </div>
            </div>
        </div>
    )
}