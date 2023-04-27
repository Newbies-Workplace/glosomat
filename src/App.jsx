import styles from './App.module.css'
import Button from "./components/Button/Button.jsx";
import Toolbar from "./components/Toolbar/Toolbar.jsx";
function App() {
    return(
        <div className={styles.container}>
            <Toolbar/>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Button onClick={()=>{console.log("Hello")}}>Nowe głosowanie</Button>
                </div>
                <div className={styles.yourvote}>
                    <Button variant="secondary" onClick={() =>{console.log("elo")}}>Twoje głosowanie</Button>
                    <Button variant="secondary" onClick={() =>{console.log("elo")}}>Twoje głosowanie</Button>
                    <Button variant="secondary" onClick={() =>{console.log("elo")}}>Twoje głosowanie</Button>
                </div>
            </div>
        </div>
    )
}
export default App

