import "./App.css";
import PokemonSpinner from "./components/PokemonSpinner";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        alt="pokemon!"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png"
        width={300}
      />
      <div>
        <PokemonSpinner />
      </div>
    </div>
  );
}

export default App;
