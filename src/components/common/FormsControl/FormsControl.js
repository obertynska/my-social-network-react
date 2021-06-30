import s from "./FormsControl.module.css"
import React from "react"

export const Textarea = ({ input, label, type, meta: { touched, error, warning }, ...props }) => {
    return (
        <div>
            <textarea {...input} type={type} {...props} className={touched && error ? `${s.error}` : undefined}/>
             <div className={s.errorBlock}>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
             </div>
        </div>
    )
}


export const Input = ({ input, label, type, meta: { touched, error, warning }, ...props }) => {
    return (
        <div>
            <input {...input} type={type} {...props} className={touched && error ? `${s.error}` : undefined}/>
            <div className={s.errorBlock}>
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
}

