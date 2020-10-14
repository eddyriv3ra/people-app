import React, { ReactElement, useEffect } from 'react';
import Person from 'components/Person';
import SearchBar from 'components/SearchBar';
import Container from 'components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from 'actions/people.actions';
import { getData, getStatus } from 'selectors/people.selector';
import { StyledApp } from './App.style';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const data = useSelector(getData);
  const status = useSelector(getStatus);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  return (
    <StyledApp>
      <SearchBar />
      <Container isLoading={status}>
        {data.map((value) => {
          return (
            <Person
              key={value.name}
              name={value.name}
              gender={value.gender}
              height={value.height}
            />
          );
        })}
      </Container>
    </StyledApp>
  );
};

export default App;
