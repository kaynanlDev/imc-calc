import styles from "./style.module.css";
import type { ImcPessoas } from "../../data/data";

interface listPessoasImc {
  data: ImcPessoas[];
  imc: number;
}
export default function ImcTable({ data, imc }: listPessoasImc) {
  return (
    <div className={styles.formContainer}>
      <div>
        <p>
          Seu IMC: <span>{imc}</span>
        </p>
        <p>
          Situação atual: <span>{data.classificacao}</span>
        </p>
      </div>
      <h3>Confira a tabela</h3>
      <table>
        <thead>
          <th>IMC</th>
          <th>Classificação</th>
          <th>obesidade</th>
        </thead>
        <tbody>
          <tr>
            <td>Menor que 18,5</td>
            <td>Magreza</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Entre 18,5 e 24,9</td>
            <td>Normal</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Entre 25,0 e 29,9</td>
            <td>Sobrepeso</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Entre 30,0 e 39,9</td>
            <td>Obesidade</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Maior que 40</td>
            <td>Obesidade grave</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
