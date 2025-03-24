import "./App.css";
import Calculadora from "./Calculadora";

function App() {
  const formulaPitagoras = (ladoB, ladoC) => {
    const quadradoB = Math.pow(ladoB, 2);
    const quadradoC = Math.pow(ladoC, 2);
    const somaQuadrados = quadradoB + quadradoC;
    return Math.sqrt(somaQuadrados);
  };

  return (
    <div className="pitagoras">
      <img
        src="/imagens/triangulo-retangulo.webp"
        alt="Triângulo retângulo de Pitagoras"
        width={500}
      />
      <Calculadora formulaPitagoras={formulaPitagoras} />
    </div>
  );
}

export default App;
