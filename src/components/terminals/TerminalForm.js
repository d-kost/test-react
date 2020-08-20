import React, { useState } from 'react';
import FormInput from '../form/FormInput';
import PropTypes from 'prop-types';

const TerminalsForm = ({ addTerminal }) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const formSubmitHandler = (e) => {
    e.preventDefault();

    //add terminal to redux store
    addTerminal(name, description);
    setName('');
    setDescription('');
  }

  return (
    <form onSubmit={formSubmitHandler} className='home-form mx-auto rounded p-3' >

      <FormInput
        type='text'
        label='Название терминала'
        minLength={1}
        value={name}
        onChange={setName}
        isInvalid={false}
      />

      <FormInput
        type='text'
        label='Описание'
        minLength={0}
        value={description}
        onChange={setDescription}
        isInvalid={false}
      />

      <button className='btn btn-primary'>Добавить</button>
    </form>
  )
}

TerminalsForm.propTypes = {
  addTerminal: PropTypes.func
}

export default TerminalsForm;
