import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>abcd</td>
            <td className="withdraw">- R$ 1234.00</td>
            <td>abcd</td>
            <td>20/09/2022</td>
          </tr>
          <tr>
            <td>abcd</td>
            <td className="deposit">R$ 1234.00</td>
            <td>abcd</td>
            <td>20/09/2022</td>
          </tr>
          <tr>
            <td>abcd</td>
            <td className="withdraw">- R$ 1234.00</td>
            <td>abcd</td>
            <td>20/09/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}