import { Formik } from 'formik';
import { useFormik } from 'formik';

const Form = () => {

  const formik = useFormik({
    initialValues: {
      Name: '',
      email: '',
      amount: 0,
      currency: '',
      text: '',
      terms: false
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2 className="form__title">Отправить пожертвование</h2>
      <label className="form__label" htmlFor="name">Ваше имя</label>
      <input className="form__input"
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <label className="form__label" htmlFor="email">Ваша почта</label>
      <input className="form__input"
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <label className="form__label" htmlFor="amount">Количество</label>
      <input className="form__input"
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
      />
      <label className="form__label" htmlFor="currency">Валюта</label>
      <select className="form__select"
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}>
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
      </select>
      <label className="form__label" htmlFor="text">Ваше сообщение</label>
      <textarea className="form__textarea"
        id="text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
      />
      <label className="form__label form__label--checkbox">
        <input className="form__checkbox"
        name="terms"
        type="checkbox"
        value={formik.values.terms}
        onChange={formik.handleChange} />
        Соглашаетесь с политикой конфиденциальности?
      </label>
      <button className="form__submit" type="submit">Отправить</button>
    </form>
  )
}

export default Form;
