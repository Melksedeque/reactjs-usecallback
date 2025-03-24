import { useEffect } from "react";
import { useState } from "react";

function Calculadora({ formulaPitagoras }) {
  const [ladoB, setLadoB] = useState(0);
  const [ladoC, setLadoC] = useState(0);
  const [hipotenusa, setHipotenusa] = useState(0);

  useEffect(() => {
    if (ladoB > 0 && ladoC > 0) {
      setHipotenusa(formulaPitagoras(ladoB, ladoC));
    }
  }, [ladoB, ladoC, formulaPitagoras]);

  return (
    <div>
      <h1>Calculadora de Pitágoras</h1>
      <div>
        <label htmlFor="">Lado B: </label>
        <input
          type="number"
          placeholder="Insira o valor de B"
          value={ladoB}
          onChange={(e) => setLadoB(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Lado C: </label>
        <input
          type="number"
          placeholder="Insira o valor de C"
          value={ladoC}
          onChange={(e) => setLadoC(e.target.value)}
        />
      </div>
      <p>
        O valor da hipotenusa é: <strong>{hipotenusa}</strong>
      </p>
    </div>
  );
}

export default Calculadora;
