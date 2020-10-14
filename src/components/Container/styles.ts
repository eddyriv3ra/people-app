import styled from 'styled-components';

export const ContainerStyle = styled.div`
  height: 100vh;
  min-width: 60%;
  flex-direction: column;
  display: flex;
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid gray;
    border-color: gray transparent gray transparent;
    animation: rotate 1.2s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
