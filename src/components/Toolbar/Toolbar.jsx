import React from "react";
import styles from './Toolbar.module.css'
import Logo from '../../assets/logo.svg';
const Toolbar = () => {
    return(
        <div className={styles.toolbar}>
            <div className={styles.greenRectangle}>
                <Logo className={styles.logo}/>
                <h4>GŁOSOMAT</h4>
            </div>
            <div className={styles.line}/>
        </div>
    )
}
export default Toolbar;