import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { createFild, Input } from '../common/FormsControls/FormsControls';
import { login } from './../../Redux/auth-reducer';
import Lcss from './Login.module.css';
import css from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {createFild('Email', 'email', Input, [required])}
                {createFild('Password', 'password', Input, [required], { type: "password" })}
                {createFild(null, 'rememberMe', Input, [], { type: "checkbox" }, "remember me")}
                {error && <div className={css.formSummarreError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return (
            <Redirect to={"/profile"} />
        );
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);