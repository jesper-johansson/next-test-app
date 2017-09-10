import React from 'react';
import propTypes from './propTypes';
import styles from './styles';

const TextField = ({ placeholder }) => (
  <div>
    <input type="text" placeholder={placeholder} />
    <style jsx>{styles}</style>
  </div>
);

TextField.propTypes = propTypes;

export default TextField;
