import React from "react";
import styles from './Toolbar.module.css'
import Logo from '../../assets/logo.svg';

const Toolbar = () => {
    return(
    <div className={styles.greenRectangle}>
        <Logo/>
        <h4>GŁOSOMAT</h4>
    </div>
    )
}

export default Toolbar;