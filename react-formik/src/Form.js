import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
// https://github.com/jquense/yup
// https://formik.org/docs/overview

const MyTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="form__label" htmlFor={props.name}>{label}</label>
      <input className="form__input" {...props} {...field}/>

      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  )
};

const MyCheckBox = ({children, ...props}) => {
  const [field, meta] = useField({...props, type: 'checkbox'});
  return (
    <>
      <label className="form__label form__label--checkbox">
        <input className="form__checkbox" type='checkbox' {...props} {...field}/>
        {children}
      </label>

      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  )
};

const CustomForm = () => {

  return (
    <Formik
      initialValues = {{
        name: '',
        email: '',
        amount: 0,
        currency: '',
        text: '',
        terms: false
      }}
      validationSchema = {Yup.object({
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
      })}
      onSubmit = {values => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="form">
        <h2 className="form__title">Отправить пожертвование</h2>
        <MyTextInput
          label='Ваше имя'
          id="name"
          name="name"
          type="text"
        />
        <MyTextInput
          label='Ваша почта'
          id="email"
          name="email"
          type="email"
        />
        <label className="form__label" htmlFor="amount">Количество</label>
        <Field className="form__input"
          id="amount"
          name="amount"
          type="number"
        />
        <ErrorMessage className='error' name='amount' component='div'/>
        <label className="form__label" htmlFor="currency">Валюта</label>
        <Field className="form__select"
          id="currency"
          name="currency"
          as='select'>
          {/* as='' говорит нам какой тип инпута тут будет. по умолчанию ставится обычный input */}
            <option value="">Выберите валюту</option>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
            <option value="RUB">RUB</option>
        </Field>
        <ErrorMessage className='error' name='currency' component='div'/>
        <label className="form__label" htmlFor="text">Ваше сообщение</label>
        <Field className="form__textarea"
          id="text"
          name="text"
          as='textarea'
        />
        <ErrorMessage className='error' name='text' component='div'/>
        <MyCheckBox name='terms'>
          Соглашаетесь с политикой конфиденциальности?
        </MyCheckBox>
        <button className="form__submit" type="submit">Отправить</button>
      </Form>
    </Formik>
  )
}

export default CustomForm;
