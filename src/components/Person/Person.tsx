import React, { ReactElement } from 'react';
import { PersonStyles, Button, PersonDetails } from './styles';

type PersonType = {
  name: string;
  gender: string;
  height: string;
};

const Person = ({ name, gender, height }: PersonType): ReactElement => {
  return (
    <PersonStyles>
      <PersonDetails>
        <span>{name}</span>
        <span>Height: {height}</span>
        <span>Gender; {gender}</span>
      </PersonDetails>
      <Button type="button">Eliminar</Button>
    </PersonStyles>
  );
};

export default Person;
