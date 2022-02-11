import { Formik } from 'formik';
import { useFormik } from 'formik';

const formik = useFormik({
  initialValues: {
    Name: '',
    email: '',
    amount: '',
    currency: '',
    text: '',
    terms: false
  },
  onSubmit: values => {
    console.log(JSON.stringify(values, null, 2));
  },
});

const Form = () => {
  return (
    <form className="form">
      <h2 className="form__title">Отправить пожертвование</h2>
      <label className="form__label" htmlFor="name">Ваше имя</label>
      <input className="form__input"
        id="name"
        name="name"
        type="text"
      />
      <label className="form__label" htmlFor="email">Ваша почта</label>
      <input className="form__input"
        id="email"
        name="email"
        type="email"
      />
      <label className="form__label" htmlFor="amount">Количество</label>
      <input className="form__input"
        id="amount"
        name="amount"
        type="number"
      />
      <label className="form__label" htmlFor="currency">Валюта</label>
      <select className="form__select"
        id="currency"
        name="currency">
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
      </select>
      <label className="form__label" htmlFor="text">Ваше сообщение</label>
      <textarea className="form__textarea"
        id="text"
        name="text"
      />
      <label className="form__label form__label--checkbox">
        <input className="form__checkbox" name="terms" type="checkbox" />
        Соглашаетесь с политикой конфиденциальности?
      </label>
      <button className="form__submit" type="submit">Отправить</button>
    </form>
  )
}

export default Form;
