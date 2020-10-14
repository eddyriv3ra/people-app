import React, { ReactElement } from 'react';
import StyledButton from './styles';

type ButtonType = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonType): ReactElement => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
