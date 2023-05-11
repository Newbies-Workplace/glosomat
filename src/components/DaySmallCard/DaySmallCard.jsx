import React from "react";
import styles from './DaySmallCard.module.css';
import ReactModal from "react-modal";

export function DaySmallCard({children,title,selected}){
    const cardClass = selected ? styles.selected : styles.card;

    return(
        <div className={styles.dayCardContainer}>
            <div className={styles.dayNumber}>{title}</div>
            <div className={styles.dayCard}>
                {children}
                <div className={cardClass}>
                    {selected && <div className={styles.dot}></div>}
                </div>

            </div>

        </div>
    )

}