import { useState } from 'react';

import { Container, Input } from './styles';

export function Form() {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Digite um número"
        value={value}
        onChange={(props) => {
          setValue(Number(props.target.value))
        }}
      />
      <button
        type="submit"
      >
        Enviar
      </button>
    </Container>
  );
}