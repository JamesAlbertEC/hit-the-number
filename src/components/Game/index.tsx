import { Restart } from "../Restart";
import { Container } from "./styles"

interface IGameProps {
  comparedNumber: any;
  setReset: any;
}

export function Game({ comparedNumber, setReset }: IGameProps) {
  const generatedNumber = 10;
  if (comparedNumber === 0) {
    return (
      <Container>
        <span>Digite um número</span>
      </Container>
    );
  } else if (comparedNumber === generatedNumber) {
    return (
      <>
        <Restart reset={setReset} />
        <Container>
          <span>Acertou</span>
        </Container>
      </>
    );
  } else if (comparedNumber < generatedNumber) {
    return (
      <Container>
        <span>O número é maior</span>
      </Container>
    );
  } else {
    return (
      <Container>
        <span>O número é menor</span>
      </Container>
    );
  }

}