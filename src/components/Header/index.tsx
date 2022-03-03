import { Container } from "./styles";

interface HeaderProps {
  onOpenRegister: () => void;
}

export function Header({ onOpenRegister }: HeaderProps) {
  return (
    <Container>
      <h1>Qual é o número?</h1>
      <button type="button" onClick={onOpenRegister}>
        Registrar Record
      </button>
    </Container>
  );
}