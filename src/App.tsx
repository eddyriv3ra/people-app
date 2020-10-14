import React, { ReactElement, useEffect } from 'react';
import Card from 'components/Card';
import SearchForm from 'components/SearchForm';
import Container from 'components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from 'actions/people.actions';
import { getStatus, getFilteredData } from 'selectors/people.selector';
import { StyledApp } from './styles';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);
  const filteredData = useSelector(getFilteredData);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  return (
    <StyledApp>
      <SearchForm />
      <Container isLoading={status}>
        {filteredData.map((value) => {
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
