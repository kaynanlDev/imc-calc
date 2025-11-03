import React, { useState } from "react";
import "./App.css";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";
import { data } from "./data/data.ts";

function App() {
  const [imc, setImc] = useState<number | null>(null);
  const [situation, setSituation] = useState("");

  function calcImc(
    e: React.MouseEvent<HTMLButtonElement>,
    altura: string,
    peso: string
  ) {
    e.preventDefault();

    const alturaNum = parseFloat(altura.replace(",", "."));
    const pesoNum = parseFloat(peso.replace(",", "."));

    if (!pesoNum || !alturaNum) return;

    const resultImc = parseFloat(
      (pesoNum / (alturaNum * alturaNum)).toFixed(1)
    );

    console.log(resultImc);
    setImc(resultImc);
    situationImc(resultImc);
  }

  function situationImc(imc: number) {
    if (imc < 18.5) {
      setSituation("Magreza");
    } else if (imc >= 18.5 && imc <= 24.9) {
      setSituation("Normal");
    } else if (imc >= 25 && imc <= 29.9) {
      setSituation("Sobrepeso");
    } else if (imc >= 30 && imc <= 39.9) {
      setSituation("Obesidade");
    } else {
      setSituation("Obesidade grave");
    }
  }

  return (
    <>
      {!imc ? (
        <ImcCalc actionCalc={calcImc} />
      ) : (
        <ImcTable imc={imc} situation={situation} />
      )}
    </>
  );
}

export default App;
