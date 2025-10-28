export default function ImcCalc() {
  return (
    <div className="form-container">
      <h1>Calculadora de IMC</h1>
      <form id="form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="altura">Altura:</label>
            <input
              type="text"
              name="altura"
              id="altura"
              placeholder="Exemplo 1,65"
            />
          </div>
          <div className="form-control">
            <label htmlFor="peso">Peso:</label>
            <input
              type="text"
              name="peso"
              id="peso"
              placeholder="Exemplo 1,65"
            />
          </div>
        </div>
        <div className="actions-control">
          <button>Calcular</button>
          <button>Limpar</button>
        </div>
      </form>
    </div>
  );
}
