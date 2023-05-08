import React, {useState} from "react";
import styles from "../App.module.css";
import Toolbar from "../components/Toolbar/Toolbar.jsx";
import Button from "../components/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import VoteDialog from "../components/VoteDialog/VoteDialog.jsx";
import ReactModal from "react-modal";

export function HomePage() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(true);
    }
    return (
        <div className={styles.container}>

            <Toolbar/>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                        <Button onClick={() => {
                            handleClick()
                        }}>Nowe głosowanie</Button>
                    <div className={styles.yourvote}>
                        <Button variant="secondary" onClick={() => {
                            console.log("elo")
                            navigate('/vote/id1')
                        }}>Twoje głosowanie</Button>
                        <Button variant="secondary" onClick={() => {
                            console.log("elo")
                        }}>Twoje głosowanie</Button>
                        <Button variant="secondary" onClick={() => {
                            console.log("elo")
                        }}>Twoje głosowanie</Button>
                    </div>
                </div>
            </div>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Dialog Window"
                className="ReactModal__Content"
            >
                    <VoteDialog></VoteDialog>
            </ReactModal>
        </div>

    )
}