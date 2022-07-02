import { useState } from "react"

export default function Form() {

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // const handleChange = (evt) => {
  //   switch (evt.target.name) {
  //     case 'name':
  //       setName(evt.target.value);
  //       break;
  //     case 'email':
  //       setEmail(evt.target.value);
  //       break;
  //     default:
  //       console.log('неизвестный ввод! ошибка в функции handleChange');
  //   }
  // }

  // const handleChange_2 = (evt) => {
  //   setState({[event.target.name]: event.target.value});
  // }

  const FORM_FIELD_NAME = {
    NAME: 'name',
    EMAIL: 'email',
  }

  const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const formTemplate = {
    [FORM_FIELD_NAME.NAME]: '',
    [FORM_FIELD_NAME.EMAIL]: '',
  }



  const [form, setForm] = useState(formTemplate)

  const handleChange = (evt) => {
    const value = evt.target.value;
    const stateName = evt.target.name;
    setForm(
      Object.assign(
        {},
        form,
        {
          [stateName]: value
        }
      )
    )
  }

  const validateEmail = () => {
    if(!EMAIL_REGEX.test(form[FORM_FIELD_NAME.EMAIL]) && form[FORM_FIELD_NAME.EMAIL].trim() !== '') {
      alert('invalid email')
    }
  }

  return(
    <form className="form">
      <h2 className="form__title">Super Form</h2>
      <label className="form__label">
        Name
        <input className="form__input" type="text" name={FORM_FIELD_NAME.NAME}
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label className="form__label">
        Email
        <input className="form__input" type="text" name={FORM_FIELD_NAME.EMAIL}
        value={form.email}
        onChange={handleChange}
        onBlur={validateEmail}
        />
      </label>
    </form>
  )
}
