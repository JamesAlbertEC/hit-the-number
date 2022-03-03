import { Container } from "./styles";

import { useTransactions } from "../../hooks/useTransactions";

export function Table() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.nick}</td>
              <td>{transaction.record}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}