import React from 'react';
import propTypes from './propTypes';
import styles from './styles';

const Button = ({ children }) => (
  <button>
    {children}
    <style jsx>{styles}</style>
  </button>
);

Button.propTypes = propTypes;

export default Button;
