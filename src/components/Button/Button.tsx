import React, { ReactElement } from 'react';
import StyledButton from './styles';

type ButtonType = {
  label: string;
};

const Button = ({ label }: ButtonType): ReactElement => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
