import React, {useState} from "react";
import cs from 'classnames';
import styles from './Button.module.css'
import { Link } from 'react-router-dom';
import ReactModal from "react-modal";
import VoteDialog from "../VoteDialog/Dialog.jsx";
const Button = (
    {
        children,
        className,
        type = 'button',
        onClick,
        variant = 'primary',
    }
) =>{

    const buttonClasses = cs(styles.button, {
        [styles.buttonYourv]: variant === 'secondary'
    }, className);
    return(
            <div>
                <button
                    type={type}
                    className={buttonClasses}
                    style={{ fontFamily: 'Cherry Swash' }}
                    onClick={onClick}
                >
                    {children}
                </button>

            </div>



    )
}
export default Button;