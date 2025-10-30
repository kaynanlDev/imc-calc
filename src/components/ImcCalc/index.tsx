import React, { useState } from "react";
import Button from "../Button";
import styles from "../ImcCalc/style.module.css";

interface ImcCalcProps {
  actionCalc: (
    e: React.MouseEvent<HTMLButtonElement>,
    altura: string,
    peso: string
  ) => void;
}
export default function ImcCalc({ actionCalc }: ImcCalcProps) {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  function validInput(text: string) {
    return text.replace(/[^0-9,]/, "");
  }
  //função para limpar inputs
  function clearForm(e: any) {
    e.preventDefault();

    setAltura("");
    setPeso("");
  }

  function handleAltura(e: React.ChangeEvent<HTMLInputElement>) {
    const newInput = validInput(e.target.value);

    setAltura(newInput);
  }

  function handlePeso(e: React.ChangeEvent<HTMLInputElement>) {
    const newInput = validInput(e.target.value);

    setPeso(newInput);
  }
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Calculadora de IMC</h1>
      <form>
        <div className="form-inputs">
          <div className={styles.formControl}>
            <label htmlFor="altura">Altura:</label>
            <input
              type="text"
              name="altura"
              id="altura"
              placeholder="Exemplo 1,65"
              onChange={handleAltura}
              value={altura}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="peso">Peso:</label>
            <input
              type="text"
              name="peso"
              id="peso"
              placeholder="Exemplo 1,65"
              onChange={handlePeso}
              value={peso}
            />
          </div>
        </div>
        <div className={styles.actionsControl}>
          <Button classs="calcBtn" action={(e) => actionCalc(e, altura, peso)}>
            Calcular
          </Button>
          <Button classs="clearBtn" action={clearForm}>
            Limpar
          </Button>
        </div>
      </form>
    </div>
  );
}
