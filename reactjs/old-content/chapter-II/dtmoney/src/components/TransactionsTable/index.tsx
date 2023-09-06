import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Salário</td>
            <td className="Deposit">R$8.000</td>
            <td>Trabalho</td>
            <td>12/01/2021</td>
          </tr>
          <tr>
            <td>Teclado Gamer</td>
            <td className="Withdraw">- R$1.000</td>
            <td>Eletrônicos</td>
            <td>04/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
