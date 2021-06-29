import s from "./FormsControl.module.css"
export const Textarea = ({
                             input,
                             label,
                             type,
                             meta: { touched, error, warning }
                         }) => {

    return (
        <div>
            <textarea {...input} type={type} className={touched && error ? `${s.error}` : undefined}/>
             <div className={s.errorBlock}>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
             </div>
        </div>
    )
}
