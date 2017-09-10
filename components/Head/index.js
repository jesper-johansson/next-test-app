import React from 'react';
import NextHead from 'next/head';
import propTypes from './propTypes';
import styles from './styles';

const Head = ({ title }) => (
  <div>
    <NextHead>
      <title>
        {title || 'next-test-app'}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
    <style jsx global>{styles}</style>
  </div>
);

Head.propTypes = propTypes;

export default Head;
