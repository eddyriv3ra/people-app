import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPeople } from 'actions/people.actions';
import { PersonStyles, Button, PersonDetails } from './styles';

const Person = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople());
  }, []);

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
