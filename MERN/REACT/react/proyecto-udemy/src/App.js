import logo from "./logo.svg";
import "./App.css";
//import HolaMundo from "./componentes/HolaMundo";
import AdiosMundo from "./componentes/AdiosMundo";
import Saludar from "./componentes/Saludar";
import Saludo2 from "./componentes/Saludo2";

function App() {
  const user = {
    nombre: "Jorge Rodrigo",
    apellido:"Sepúlveda Turpie",
    edad: 48,
    color: "Azul",
  };
  const saludarFn = (name, edad) => {
    console.log(`Hola, ${name}, tiene ${edad} años. -`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFn={saludarFn} />
        <AdiosMundo userInfo={user} />
        <Saludo2 userInfo={user} />
      </header>
    </div>
  );
}

export default App;
