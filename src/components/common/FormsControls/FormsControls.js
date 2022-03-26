import React from "react";
import { Field } from "redux-form";
import css from "./FormsControls.module.css";

const FormControl = ({ input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
    )
}

export const createField = (placeholder, name, component, validate, props={}, text= "" ) => (
    <div>
        <Field
            placeholder={placeholder} name={name}
            component={component}
            validate={validate}
            {...props}
        /> {text}
    </div>
)