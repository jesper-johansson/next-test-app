import React from 'react';
import Head from '../components/Head';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import TextField from '../components/TextField';
import Button from '../components/Button';

export default () => (
  <div>
    <Head />
    <Title level="h1">
      Hello World!
    </Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque accumsan nulla quis pellentesque vehicula.
      Sed tempus nulla quis diam ultrices aliquet in nec turpis.
      Suspendisse vehicula libero eget ex pharetra maximus.
      Vestibulum sed bibendum lacus. Nulla posuere gravida eros, quis.
    </Paragraph>
    <TextField />
    <Button>
      Click here
    </Button>
  </div>
);
