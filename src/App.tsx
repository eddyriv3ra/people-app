import React, { ReactElement, useEffect } from 'react';
import Card from 'components/Card';
import SearchForm from 'components/SearchForm';
import Container from 'components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from 'actions/people.actions';
import { getData, getStatus } from 'selectors/people.selector';
import { StyledApp } from './styles';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const data = useSelector(getData);
  const status = useSelector(getStatus);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  return (
    <StyledApp>
      <SearchForm />
      <Container isLoading={status}>
        {data.map((value) => {
          return (
            <Card
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
