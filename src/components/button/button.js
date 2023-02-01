import React from 'react';
import styles from './button.module.css'

const Button = ({ children }) => {
  return (
    <div className='button'>
      <button type='submit'>{children}</button>
      <h1 className={styles.active}>hello</h1>
    </div>
  );
};

export default Button;