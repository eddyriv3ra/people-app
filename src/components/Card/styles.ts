import styled from 'styled-components';

export const PersonStyles = styled.div`
  height: 8rem;
  margin-bottom: 1rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid gray;
  box-shadow: 7px 5px 5px 0px rgba(0, 0, 0, 0.4);
`;

export const Button = styled.button`
  height: 2rem;
  padding: 0.5rem;
  border-radius: 7px;
  border-color: gray;
`;

export const PersonDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
