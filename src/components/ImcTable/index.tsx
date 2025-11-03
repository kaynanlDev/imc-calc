import clsx from "clsx";
import styles from "./style.module.css";

interface listPessoasImc {
  imc: number;
  situation: string;
}
export default function ImcTable({ imc, situation }: listPessoasImc) {
  return (
    <div className={styles.formContainer}>
      <div>
        <p className="text-center">
          Seu IMC: <span>{imc ?? "Não calculado"}</span>
        </p>
        <p>
          Situação atual:{" "}
          <span
            className={clsx("default", {
              [styles.magreza]: imc !== null && imc < 18.5,
              [styles.normal]: imc !== null && imc >= 18.5 && imc <= 24.9,
              [styles.sobrepeso]: imc !== null && imc >= 25 && imc <= 29.9,
              [styles.obesidade]: imc !== null && imc >= 30 && imc <= 39.9,
              [styles.obesidadeGrave]: imc !== null && imc > 40,
            })}
          >
            {situation || "Não calculado"}
          </span>
        </p>
      </div>
      <h3>Confira a tabela</h3>
      <table>
        <tr>
          <th>IMC</th>
          <th>Classificação</th>
          <th>obesidade</th>
        </tr>
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
