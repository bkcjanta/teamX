import React from 'react'
import styles from "./homepage.module.css"

const Homepage = () => {
    return (
        <div className={styles.home_cont}>
            <div className={styles.banner_div}>
                <div className={styles.text}><h1 className={styles.caps}>Welcome to Test Labs</h1>
                    <p className={styles.para}>
                        India's Leading Test Series Platform
                    </p>
                </div>
                <div className={styles.image}>
                    <img src="https://www.oetpractice.net/images/img/maiva-dashboard1.png" alt="banner" />
                </div>
            </div></div>
    )
}

export default Homepage