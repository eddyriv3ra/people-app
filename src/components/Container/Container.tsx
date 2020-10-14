import React, { ReactElement, ReactNode } from 'react';
import { ContainerStyle, Spinner } from './styles';

type ContainerProps = {
  children: ReactNode;
  isLoading: boolean;
};

const Container = ({ children, isLoading }: ContainerProps): ReactElement => {
  if (isLoading)
    return (
      <ContainerStyle>
        <Spinner />
      </ContainerStyle>
    );

  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
