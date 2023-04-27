import React from "react";
import cs from 'classnames';
import styles from './Button.module.css'
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
        <button
            type={type}
            className={
            buttonClasses}
            style={{ fontFamily: 'Cherry Swash' }
        }
        onClick={onClick}>
            {children}
        </button>
    )
}
export default Button;