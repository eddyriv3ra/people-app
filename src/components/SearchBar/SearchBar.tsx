import React, { ReactElement, useState } from 'react';
import Button from 'components/Button';
import { findPerson } from 'actions/people.actions';
import { useDispatch } from 'react-redux';
import { InputBar, SearchBarStyles } from './styles';

const SearchBar = (): ReactElement => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    dispatch(findPerson(input));
  };

  return (
    <SearchBarStyles>
      <InputBar
        type="text"
        onChange={onChange}
        value={input}
        placeholder="Search..."
      />
      <Button label="Search" onClick={onClick} />
    </SearchBarStyles>
  );
};

export default SearchBar;
