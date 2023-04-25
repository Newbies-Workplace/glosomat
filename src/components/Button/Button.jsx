import React from "react";
import cs from 'classnames';
import styles from './Button.module.css'



//class ButtonProps {
//}

const Button = (
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


export default Button;