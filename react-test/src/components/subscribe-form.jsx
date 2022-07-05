import './subscribe-form.css';
import { useState, useEffect } from 'react';

export default function SubscribeForm() {

  const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const subscribeStateTemplate = {
    'email': '',
    'agree': false,
    'status': '',
  };

  const [subscribe, setSubscribe] = useState(subscribeStateTemplate);
  const [emailError, setEmailError] = useState('');

  const setNewState = (name, value) => {
    setSubscribe(
      Object.assign(
        {},
        subscribe,
        {
          [name]: value
        }
      )
    )
  }

  const validateEmail = () => {
    if(!EMAIL_REGEX.test(subscribe.email.toLocaleLowerCase()) && subscribe.email.trim() !== '') {
      setEmailError('invalid Email address!');
    } else {
      setEmailError('');
    }
  }

  useEffect(() => {
    validateEmail();
  }, [subscribe.email]);

  const handleEmailChange = (evt) => {
    setNewState(evt.target.name, evt.target.value);
  }

  const handleAgreeChange = (evt) => {
    setNewState(evt.target.name, evt.target.checked);
  }

  const subscribeBtn = () => {
    if(emailError) {
      setNewState('status', '');
      alert('invalid Email Address!!!');
      return;
    }
    if(!subscribe.agree) {
      setNewState('status', '');
      alert('You ned aggre!');
      return;
    }

    setSubscribe({
      'email': '',
      'agree': false,
      'status': 'subscribe success!',
    });
  }

  return(
    <form className="subscribe">
      <h2 className="subscribe__title">Subscribe form</h2>
      <label className="subscribe__label">
        Your Email
        <input className="subscribe__input" type="text" name='email'
          value={subscribe.email}
          onInput={handleEmailChange}
        />
        <span className='subscribe__error subscribe__error--email'>{emailError ? emailError : ''}</span>
      </label>
      <label className="subscribe__label">
        I agree with terms and conditions
        <input className="subscribe__input subscribe__input--checkbox" type="checkbox" name='agree'
          checked={subscribe.agree}
          onChange={handleAgreeChange}
        />
      </label>
      <button className='subscribe__button neumorphic neumorphic-button' type='button'
        disabled={emailError}
        onClick={subscribeBtn}
      >
        Subscribe
      </button>
      <span className='subscribe__status'>{subscribe.status}</span>
    </form>
  )
}
