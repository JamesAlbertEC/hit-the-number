import styled from "styled-components";

export const Container = styled.div`
  margin: 50%;
  background-color: white;
  padding: 4rem 2rem;
  border-radius: 10px;
  background-color: var(--secondary-medium);
`;

export const FormModal = styled.form`
  h2 {
    font-size: 1.8rem;
  }

  label {
    display: flex;
    margin-top: 0.6rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3.5rem;
    border-radius: 0.24rem;
    border: 1px solid var(--secondary-medium);
    background-color: var(--secondary-low);
    font-size: 1rem;
    margin-top: 0.3rem;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 2.5rem;
    border-radius: 0.24rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
  }
`;