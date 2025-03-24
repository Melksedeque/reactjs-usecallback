import "./App.css";
import Calculadora from "./Calculadora";

function App() {
  return (
    <div className="pitagoras">
      <img
        src="/imagens/triangulo-retangulo.webp"
        alt="Triângulo retângulo de Pitagoras"
        width={500}
      />
      <Calculadora />
    </div>
  );
}

export default App;
