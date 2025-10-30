import React, { useState } from "react";
import "./App.css";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";
function App() {
  const [imc, setImc] = useState<number | null>(null);
  const [info, setInfo] = useState();

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
  }

  return <>{!imc ? <ImcCalc actionCalc={calcImc} /> : <ImcTable />}</>;
}

export default App;
