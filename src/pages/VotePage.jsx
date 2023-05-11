import React, { useState } from "react";
import Toolbar from "../components/Toolbar/Toolbar.jsx";
import styles from './VotePage.module.css';
import { DaySmallCard } from '../components/DaySmallCard/DaySmallCard.jsx';
import { useParams } from "react-router-dom";
import localeData from "dayjs/plugin/localeData";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

dayjs.extend(localeData);
dayjs.locale("pl");
export function VotePage() {
    const [selectedMonths, setSelectedMonths] = useState({});
    const [selectedMonth, setSelectedMonth] = useState(dayjs());
    const handleCardClick = (cardIndex) => {
        const selectedMonthId = selectedMonth.format("YYYY-MM");
        const selectedCards = selectedMonths[selectedMonthId] || new Set();

        if (selectedCards.has(cardIndex)) {
            selectedCards.delete(cardIndex);
        } else {
            selectedCards.add(cardIndex);
        }
        setSelectedMonth(selectedMonth);

        setSelectedMonths({
            ...selectedMonths,
            [selectedMonthId]: selectedCards,
        });
    };

    const generateDateCards = (month) => {
        const startOfMonth = month.startOf("month");
        const selectedMonthId = month.format("YYYY-MM");
        const selectedCards = selectedMonths[selectedMonthId] || new Set();

        const cards = [];
        for (let i = 0; i < startOfMonth.daysInMonth(); i++){
            let style = {}
            if(i === 0){
                style = { gridColumnStart: startOfMonth.isoWeekday() }
            }

            const isCardSelected = selectedCards.has(i);
            cards.push(
                <div key={i} style={style} onClick={() => {
                   handleCardClick(i)
                }}>
                    <DaySmallCard title={`Day ${i + 1}`} selected={isCardSelected}/>
                </div>
            )
        }
        return cards;
    };
    const decreaseMonth = () => {
        setSelectedMonth(selectedMonth.subtract(1, "month"));
    };

    const increaseMonth = () => {
        setSelectedMonth(selectedMonth.add(1, "month"));
    };

    return (
        <div className={styles.wrap}>
            <Toolbar>
                <div className={styles.avatarContainer}></div>
            </Toolbar>
            <div className={styles.container}>
                <div className={styles.sideButtons}>
                    <button className={styles.buttonSideStyle} onClick={decreaseMonth}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </div>

                <div className={styles.monthName}>
                <h2>{selectedMonth.format("MMMM")}</h2>
                </div>

                <div className={styles.sideButtons}>
                    <button className={styles.buttonSideStyle} onClick={increaseMonth}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

            </div>
            <div className={styles.namesDays}>
                <h2 className={styles.nameDayContent}>pon </h2>
                <h2 className={styles.nameDayContent}>wt </h2>
                <h2 className={styles.nameDayContent}>śr </h2>
                <h2 className={styles.nameDayContent}>czw </h2>
                <h2 className={styles.nameDayContent}>pt </h2>
                <h2 className={styles.nameDayContent}>sob </h2>
                <h2 className={styles.nameDayContent}>niedz</h2>
            </div>
            <div className={styles.cardsContainer}>{generateDateCards(selectedMonth)}</div>

            <div className={styles.buttonsContainer}>

            </div>

        </div>
    );
}


