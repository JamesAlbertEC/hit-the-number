import { FormEvent, useState } from 'react';
import { Container, Input } from './styles';

interface IFormProps {
  setValue: any;
}

export function Form({ setValue }: IFormProps) {
  const [temp, setTemp] = useState(0);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setValue(temp);
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite um número"
        value={temp}
        onChange={event => {
          setTemp(Number(event.target.value))
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

