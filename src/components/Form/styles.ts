import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  margin: auto;
  padding-bottom: 1rem;
  align-items: center;
  justify-content: center;

  button {
    width: 25%;
    padding: 0 0.3rem;
    height: 2rem;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: auto;
  }
`;

export const Input = styled.input`
  width: 25%;
  padding: 0 1.5rem;
  height: 2rem;
  border-radius: 0.24rem;
  border: 1px solid var(--secondary-medium);
  background-color: var(--secondary-low);
  font-size: 1rem;
  margin-bottom: auto;
`;