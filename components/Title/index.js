import React from 'react';
import propTypes from './propTypes';
import styles from './styles';

const Title = ({ level, children }) => {
  const Level = level;
  return (
    <header className="title">
      <Level>
        {children}
      </Level>
      <style jsx global>{styles}</style>
    </header>
  );
};

Title.propTypes = propTypes;

export default Title;
