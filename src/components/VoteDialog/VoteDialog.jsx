import React, {useState} from "react";
import styles from './VoteDialog.module.css';
import {VoteSetDialog} from "./VoteSetDialog.jsx";
import ReactModal from 'react-modal';

 function Dialog(){
    return (
        <div className={styles.dialogContainer}>
            <VoteSetDialog></VoteSetDialog>
        </div>

    )
}
export default Dialog;