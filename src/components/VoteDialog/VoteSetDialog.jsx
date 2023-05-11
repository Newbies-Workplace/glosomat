import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Dialog.module.css"
import Button from "../Button/Button.jsx"
export function VoteSetDialog({ onNameChange, onCreate }) {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
        return (
            <div className={styles.voteDialogContent}>
                <div className={styles.nameNewVote}>Nazwa Głosowania</div>
                <div className={styles.inputContainer}>
                    <input
                        placeholder={"np. Spotkanie w Maju"}
                        className={styles.inputStyle}>
                    </input>
                </div>

                <div className={styles.textfromtoContainer}>
                    <div className={styles.text}>przedział</div>
                </div>

                <div className={styles.bottomContainer}>
                    <div className={styles.text}>od</div>
                    <DatePicker className={styles.inputStyle}
                                selected={fromDate}
                                onChange={(date) => setFromDate(date)}
                                placeholderText={"dd.mm.yyyy"}>
                    </DatePicker>
                    <div className={styles.text}>do</div>
                    <DatePicker className={styles.inputStyle}
                                selected={toDate}
                                onChange={(date) => setToDate(date)}
                                placeholderText={"dd.mm.yyyy"}>
                    </DatePicker>
                </div>
            </div>

        )

}

