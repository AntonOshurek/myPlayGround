import { useFormik } from 'formik';
import * as Yup from 'yup';
// https://github.com/jquense/yup
// https://formik.org/docs/overview

// const validate = (values) => {
//   const errors = {};

//   if(!values.name) {
//     errors.name = 'обязательное поле!';
//   } else if (values.name.length < 2) {
//     errors.name = 'минимум 2 символа';
//   }

//   if(!values.email) {
//     errors.email = 'обязательное поле!';
//   }

//   if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = 'не правильный email адрес';
//   }

//   return errors;
// }

const Form = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      amount: 0,
      currency: '',
      text: '',
      terms: false
    },
    //validate,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Минимум 2 символа')
        .required('обязательное поле'),
      email: Yup.string()
        .email('Неправильный email адрес')
        .required('обязательное поле'),
      amount: Yup.number()
        .min(5, 'Не менее 5')
        .required('обязательное поле'),
      currency: Yup.string().required('Выберите валюту'),
      text: Yup.string()
        .min(10, 'Не менее 10 символов'),
      terms: Yup.boolean()
        .required('Необходимо согласие')
        .oneOf([true], 'Необходимо согласие')
    }),
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
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
      <label className="form__label" htmlFor="email">Ваша почта</label>
      <input className="form__input"
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email ?  <div className='error'>{formik.errors.email}</div> : null}
      <label className="form__label" htmlFor="amount">Количество</label>
      <input className="form__input"
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.amount && formik.touched.amount ? <div className='error'>{formik.errors.amount}</div> : null}
      <label className="form__label" htmlFor="currency">Валюта</label>
      <select className="form__select"
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}>
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
      </select>
      {formik.errors.currency && formik.touched.currency ? <div className='error'>{formik.errors.currency}</div> : null}
      <label className="form__label" htmlFor="text">Ваше сообщение</label>
      <textarea className="form__textarea"
        id="text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.text && formik.touched.text ? <div className='error'>{formik.errors.text}</div> : null}
      <label className="form__label form__label--checkbox">
        <input className="form__checkbox"
        name="terms"
        type="checkbox"
        value={formik.values.terms}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
        Соглашаетесь с политикой конфиденциальности?
      </label>
      {formik.errors.terms && formik.touched.terms ? <div className='error'>{formik.errors.terms}</div> : null}
      <button className="form__submit" type="submit">Отправить</button>
    </form>
  )
}

export default Form;
