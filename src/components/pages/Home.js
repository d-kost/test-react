import React, { useState } from 'react';
import { getUserByLogin, terminals } from '../../js_modules/urls';
import FormInput from '../form/FormInput';
import '../../sass/Home.sass';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Home = ({ setUserAvatar }) => {

  const [login, setLogin] = useState('daria-kostuchenko');
  const [password, setPassword] = useState('vmb345CCVB');
  const [loginWarning, setLoginWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);

  const checkPasswordIsValid = () => {
    let re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).+$/g;

    if (password.match(re)) {
      return true;
    }
  }

  const fetchUser = () => {

    fetch(getUserByLogin(login))

      .then(response => {
        if (!response.ok) {
          throw new Error("User doesn't exist")
        }

        return response.json();
      })

      .then(json => submitUser(json))
      .catch(() => setLoginWarning(true))

  }

  let history = useHistory();

  const submitUser = (userData) => {
    //set avatar to redux store
    setUserAvatar(userData.avatar_url);

    history.push(`/${terminals}`);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!checkPasswordIsValid()) {
      setPasswordWarning(true);
      return;
    }
    setPasswordWarning(false);
    fetchUser();
  }

  return (
    <form onSubmit={formSubmitHandler} className='home-form mx-auto border rounded p-3 mt-3' >

      <FormInput
        type='text'
        label='GitHub Login'
        minLength={1}
        value={login}
        onChange={setLogin}
        isInvalid={loginWarning}
      />

      <FormInput
        type='password'
        label='Password'
        minLength={8}
        value={password}
        onChange={setPassword}
        isInvalid={passwordWarning}
      />

      <button className='btn btn-primary'>Submit</button>
    </form>
  )
}

Home.propTypes = {
  setUserAvatar: PropTypes.func
}

export default Home;
