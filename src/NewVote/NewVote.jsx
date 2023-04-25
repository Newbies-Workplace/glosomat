import React from "react";
import cs from 'classnames';
import styles from '../Button/Button.module.css'



//class ButtonProps {
//}

const NewVote = (
    {
        children,
        className,
        type = 'button',
    }
) =>{
    return(
        <button
            type={type}
            className={
            cs(styles.button, className)
        }
        onClick={onclick}>
            {children}
        </button>
    )
}


export default NewVote;