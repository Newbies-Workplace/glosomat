import React, {useState} from "react";
import styles from './Dialog.module.css';
import ReactModal from 'react-modal';

 function Dialog({children, title, isOpen, onDismiss}){
    return (
        <ReactModal
            ariaHideApp={true}
            isOpen={isOpen}
            onRequestClose={() => onDismiss()}
            contentLabel="Dialog Window"
            className={styles.backdrop}
        >
            <div className={styles.dialogContainer}>
                <div className={styles.textnewvote}>{title}</div>
                <div className={styles.whiteSquare}>
                    {children}
                </div>
            </div>
        </ReactModal>

    )
}
export default Dialog;