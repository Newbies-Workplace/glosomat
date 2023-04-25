import styles from './App.module.css'
import Button from "./components/Button/Button.jsx";
import YourVote from "./components/YourVote/YourVote.jsx";
import Toolbar from "./components/Toolbar/Toolbar.jsx";
function App() {
    return(
        <div className={styles.container}>
            <Toolbar/>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Button>Nowe głosowanie</Button>
                    <div className={styles.votes}>
                        <YourVote/>
                        <YourVote/>
                        <YourVote/>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default App

