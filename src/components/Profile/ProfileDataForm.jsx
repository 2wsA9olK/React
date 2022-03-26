import React from "react";
import css from './ProfileInfo.module.css';
import { createField, Input, Textarea } from '../common/FormsControls/FormsControls';
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <div className={css.formSummarreError}>
                {error}
            </div>}
            <b>Full name: {createField("Full name", "fullName", Input, [])}</b><br />
            <b>About me:</b>
            {createField("About me", "aboutMe", Textarea, [],)}<br />
            <b>Looking for a job:</b>
            {createField("", "lookingForAJob", Input, [], { type: "checkbox" })}<br />
            <b>My professional skills:</b>
            {createField("My professional skills", "lookingForAJobDescription", Textarea, [],)}<br />
            <b>Contacts:</b> <br />
            <div className={css.contacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={css.contacts}>
                        <b>{key}: {createField(key, "contacts." + key, Input, [])} </b>
                    </div>
                })}
            </div>
        </form>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}: </b> {contactValue}
        </div>
    )
}

const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataReduxForm;