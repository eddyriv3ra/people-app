import React, { ReactElement } from 'react';
import { removePerson } from 'actions/people.actions';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { PersonStyles, PersonDetails } from './styles';

type PersonType = {
  name: string;
  gender: string;
  height: string;
};

const Card = ({ name, gender, height }: PersonType): ReactElement => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(removePerson(name));
  };

  return (
    <PersonStyles>
      <PersonDetails>
        <span>{name}</span>
        <span>Height: {height}</span>
        <span>Gender; {gender}</span>
      </PersonDetails>
      <Button onClick={onClick} label="Eliminar" />
    </PersonStyles>
  );
};

export default Card;
