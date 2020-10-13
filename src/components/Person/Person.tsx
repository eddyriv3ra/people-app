import React, { ReactElement } from 'react';
import { PersonStyles, Button, PersonDetails } from './styles';

const Person = (): ReactElement => {
  return (
    <PersonStyles>
      <PersonDetails>
        <span>Owen Lars</span>
        <span>Height: 178</span>
        <span>Gender; Male</span>
      </PersonDetails>
      <Button type="button">Eliminar</Button>
    </PersonStyles>
  );
};

export default Person;
