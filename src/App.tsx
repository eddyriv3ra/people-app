import React, { ReactElement } from 'react';
import Person from 'components/Person';
import SearchBar from 'components/SearchBar';
import { StyledApp } from './App.style';

const App = (): ReactElement => {
  return (
    <StyledApp>
      <SearchBar />
      <Person />
    </StyledApp>
  );
};

export default App;
