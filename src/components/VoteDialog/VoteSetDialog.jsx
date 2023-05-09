import React from "react";
export function VoteSetDialog(){
    return(
        <div className={styles.voteDialogContent}>
            <div className={styles.nameNewVote}>Nazwa Głosowania</div>
            <div className={styles.inputContainer}>
                <input placeholder={"np. Spotkanie w Maju"} type={"text"} id={"textplace"} name={"textplace"}  className={styles.inputStyle}>
                </input>
            </div>

            <div className={styles.textfromtoContainer}>
                <div className={styles.text}>przedział</div>
            </div>

            <div className={styles.bottomContainer}>
                <div className={styles.text}>od</div>
                <input placeholder={"dd.mm.yyyy"} className={styles.inputStyle}/>
                <div className={styles.text}>do</div>
                <input placeholder={"dd.mm.yyyy"} className={styles.inputStyle}/>
            </div>
            <button className={styles.createButton}>Utwórz</button>
        </div>

    )
}

import styles from "./Dialog.module.css"
