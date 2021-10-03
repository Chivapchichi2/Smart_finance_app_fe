import s from './authForm.module.css';

const AuthForm = () => (
  <form className={s.form}>
    <p className={s.textGoogle}>
      Вы можете авторизоваться с помощью <br /> Google Account:
    </p>
    <button className={s.buttonGoogle} type="button">
      Google
    </button>
    <p className={s.textEmail}>
      Или зайти с помощью e-mail и пароля, <br />
      предварительно зарегистрировавшись:
    </p>
    <label className={s.label}>
      Электронная почта:
      <input
        className={s.input}
        type="email"
        placeholder="your@email.com"
        required
      />
    </label>

    <label className={s.label}>
      Пароль:
      <input
        className={s.input}
        type="password"
        placeholder="Пароль"
        required
      />
    </label>

    <div>
      <button className={`${s.button} ${s.orange}`} type="submit">
        Войти
      </button>
      <button className={`${s.button} ${s.grey}`} type="submit">
        Регистрация
      </button>
    </div>
  </form>
);

export default AuthForm;
