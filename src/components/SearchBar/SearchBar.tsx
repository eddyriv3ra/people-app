import React, { ReactElement } from 'react';
import Button from 'components/Button';
import { InputBar, SearchBarStyles } from './styles';

const SearchBar = (): ReactElement => {
  return (
    <SearchBarStyles>
      <InputBar />
      <Button label="Search" />
    </SearchBarStyles>
  );
};

export default SearchBar;
