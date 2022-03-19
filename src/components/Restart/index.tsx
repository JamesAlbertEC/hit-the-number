import { Container } from "./styles";

interface IFormRestart {
  reset: any;
}

export function Restart({ reset }: IFormRestart) {
  function handleReset() {
    reset(0);
  }

  return (
    <Container >
      <button type="button" onClick={handleReset}>
        Jogar Novamente
      </button>
    </Container>

  );
}