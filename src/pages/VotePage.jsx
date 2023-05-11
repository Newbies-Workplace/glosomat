import React, { useState } from "react";
import Toolbar from "../components/Toolbar/Toolbar.jsx";
import styles from './VotePage.module.css';
import { DaySmallCard } from '../components/DaySmallCard/DaySmallCard.jsx';
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

export function VotePage({ children }) {
    const [selectedCards, setSelectedCards] = useState(new Set());

    const handleCardClick = (cardIndex) => {
        if (selectedCards.has(cardIndex)) {
            selectedCards.delete(cardIndex);
        } else {
            selectedCards.add(cardIndex);
        }
        setSelectedCards(new Set(selectedCards));
    };

    const generateDateCards = (monthIndex) => {
        const month = dayjs().month(monthIndex).date(1)

        const cards = [];
        for (let i = 0; i < month.daysInMonth(); i++){
            let style = {}
            if(i === 0){
                style = { gridColumnStart: month.isoWeekday() }
            }

            const isCardSelected = selectedCards.has(i);
            cards.push(
                <div key={i} style={style} onClick={() => {
                    if (isCardSelected) {
                        selectedCards.delete(i);
                    } else {
                        selectedCards.add(i);
                    }
                    setSelectedCards(new Set(selectedCards));
                }}>
                    <DaySmallCard title={`Day ${i + 1}`} selected={isCardSelected}/>
                </div>
            )
        }
        return cards;
    };

    const { voteName } = useParams();

    return (
        <div className={styles.wrap}>
            <Toolbar>
                <div className={styles.avatarContainer}></div>
            </Toolbar>

            <div className={styles.container}>
                <h2>{voteName}</h2>
            </div>
            <div className={styles.namesDays}>
                <h2>pon </h2>
                <h2>wt </h2>
                <h2>śr </h2>
                <h2>czw </h2>
                <h2>ptk </h2>
                <h2>sob </h2>
                <h2>niedz</h2>
            </div>
            <div className={styles.cardsContainer}>{generateDateCards(0)}</div>
        </div>
    );
}


