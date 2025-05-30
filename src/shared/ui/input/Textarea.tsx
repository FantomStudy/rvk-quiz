import type { FC, TextareaHTMLAttributes } from "react";
import styles from './Input.module.css'


const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
    className,
    ...props
    }) => {
    return (
        <textarea className={`${styles.textarea} ${className}`} {...props}/>
    );
}

export default Textarea;