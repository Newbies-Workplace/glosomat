import React, {useState} from "react";
import styles from "./HomePage.module.css";
import Toolbar from "../components/Toolbar/Toolbar.jsx";
import Button from "../components/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import VoteDialog from "../components/VoteDialog/Dialog.jsx";
import {VoteSetDialog} from "../components/VoteDialog/VoteSetDialog.jsx";

export function HomePage() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(true);
    }

    return (<div className={styles.container}>
            <Toolbar/>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Button onClick={() => {
                        handleClick()
                    }}>Nowe głosowanie</Button>
                    <div className={styles.yourvote}>
                        <Button variant="secondary" onClick={() => {
                        }}>Twoje głosowanie</Button>
                        <Button variant="secondary" onClick={() => {
                        }}>Twoje głosowanie</Button>
                        <Button variant="secondary" onClick={() => {
                        }}>Twoje głosowanie</Button>
                    </div>
                </div>
            </div>
            <VoteDialog
                title={"Nowe głosowanie"}
                isOpen={isOpen}
                onDismiss={() => setIsOpen(false)}
            >
                <VoteSetDialog/>
                <button className={styles.createButton} onClick={() =>{
                    navigate('vote/id1')
                }}>Utwórz</button>
            </VoteDialog>
        </div>

    )
}