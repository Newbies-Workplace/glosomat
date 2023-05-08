import React from "react";
import styles from "./Dialog.module.css"

export function VoteSetDialog(){
    return(

                <div>

                    <div className={styles.inputContainer}>
                        <input type={"text"} id={"textplace"} name={"textplace"}  className={styles.inputStyle}>
                        </input>
                    </div>

                    <div className={styles.textfromtoContainer}>
                        <div className={styles.text}>przedział</div>
                    </div>

                    <div className={styles.bottomContainer}>
                        <div className={styles.text}>od</div>

                        <div className={styles.fromContainer}>
                            <input className={styles.inputStyle}/>
                        </div>

                        <div className={styles.text}>do</div>

                        <div className={styles.toContainer}>
                            <input className={styles.inputStyle}/>
                        </div>

                    </div>
                </div>

    )
}