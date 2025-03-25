import { useCallback } from "react";
import Calculadora from "./Calculadora";

function App() {
  const formulaPitagoras = useCallback((ladoB, ladoC) => {
    const quadradoB = Math.pow(ladoB, 2);
    const quadradoC = Math.pow(ladoC, 2);
    const somaQuadrados = quadradoB + quadradoC;
    return Math.sqrt(somaQuadrados);
  }, []);

  return (
    <div className="app">
      <img
        className="border-4 border-gray-300 rounded-3xl"
        src="/imagens/triangulo-retangulo.webp"
        alt="Triângulo retângulo de Pitagoras"
        width={500}
      />
      <Calculadora formulaPitagoras={formulaPitagoras} />
    </div>
  );
}

export default App;
