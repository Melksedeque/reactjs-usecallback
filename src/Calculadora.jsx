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
    <div className="flex flex-col align-items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-white mt-5 mb-7">
        Calculadora de Pitágoras
      </h1>
      <div className="flex flex-col align-items-center justify-center mb-5">
        <label className="text-xl text-white">Valor do Lado B:</label>
        <input
          className="border-1 border-gray-300 rounded-3xl text-white text-center p-2 placeholder:text-gray-200 placeholder:italic"
          type="text"
          placeholder="Insira o valor de B"
          value={ladoB}
          onChange={(e) => setLadoB(e.target.value)}
        />
      </div>
      <div className="flex flex-col align-items-center justify-center mb-5">
        <label className="text-xl text-white">Valor do Lado C:</label>
        <input
          className="border-1 border-gray-300 rounded-3xl text-white text-center p-2 placeholder:text-gray-200 placeholder:italic"
          type="text"
          placeholder="Insira o valor de C"
          value={ladoC}
          onChange={(e) => setLadoC(e.target.value)}
        />
      </div>
      <p className="text-white text-3xl mt-5">
        O valor da hipotenusa é: <strong>{hipotenusa}</strong>
      </p>
    </div>
  );
}

export default Calculadora;
