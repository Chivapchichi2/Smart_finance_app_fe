/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import GoogleLogin from 'react-google-login';

import authOperations from '../../../redux/auth/auth-operations';

import s from './authForm.module.css';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const dispatch = useDispatch();

  const handleSubmit = useCallback(() => {
    dispatch(authOperations.register({ email, password }));
    setEmail('');
    setPassword('');
  }, [dispatch, email, password]);

  const handleLogIn = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.login({ email, password }));
      setEmail('');
      setPassword('');
    },
    [dispatch, email, password],
  );

  const responseGoogle = response => {
    console.log(response);
  };
  const handleGoogle = response => {
    dispatch(authOperations.google(response));
  };

  return (
    <form className={s.form} onSubmit={handleLogIn}>
      <p className={s.textGoogle}>
        Вы можете авторизоваться с помощью <br /> Google Account:
      </p>
      {/* <button className={s.buttonGoogle} type="button">
        Google
      </button> */}
      <GoogleLogin
        // className={s.buttonGoogle}
        clientId="823857589070-tvc629amkhmmf85pvu56v7plahr2a9m0.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleGoogle}
        onFailure={responseGoogle}
        render={renderProps => (
          <button
            className={s.buttonGoogle}
            onClick={renderProps.onClick}
            // disabled={renderProps.disabled}
            type="submit"
          >
            Google
          </button>
        )}
      />
      <p className={s.textEmail}>
        Или зайти с помощью e-mail и пароля, <br />
        предварительно зарегистрировавшись:
      </p>
      <label className={s.label}>
        Электронная почта:
        <input
          className={s.input}
          type="email"
          name="email"
          value={email}
          placeholder="your@email.com"
          autoComplete="on"
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Пароль:
        <input
          className={s.input}
          type="password"
          name="password"
          value={password}
          placeholder="Пароль"
          autoComplete="on"
          required
          onChange={handleChange}
        />
      </label>
      <div>
        <button className={`${s.button} ${s.orange}`} type="submit">
          Войти
        </button>
        <button
          className={`${s.button} ${s.grey}`}
          type="button"
          onClick={handleSubmit}
        >
          Регистрация
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
