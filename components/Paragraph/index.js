import React from 'react';
import propTypes from './propTypes';
import styles from './styles';

const Paragraph = ({ children }) => (
  <p>
    {children}
    <style jsx>{styles}</style>
  </p>
);

Paragraph.propTypes = propTypes;

export default Paragraph;
