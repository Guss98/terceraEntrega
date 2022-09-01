import { GlobalStyles } from "./componentes/estilos/globalStyles";
import "./componentes/estilos/estilos.css";
import { Home } from "./componentes/Home/Home";
import { Pokedex } from "./componentes/Pokedex/Pokedex";
import { Form } from "./componentes/Form/Form";

function App() {
  return (
    <div className="appTo-Do">
      <GlobalStyles>
        <Home />
        <Pokedex />
        <Form></Form>
      </GlobalStyles>
    </div>
  );
}

export default App;
