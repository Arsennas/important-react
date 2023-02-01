import React from 'react';

const Input = ({ type, value, onChange, name, placeholder,status }) => {
  return (
    <div className='input'>
      <input
        style={{backgroundColor: status ? 'red' : ''}}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange} />
    </div>
  );
};

export default Input;