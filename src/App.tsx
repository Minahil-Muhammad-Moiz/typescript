import "./App.css";
import Person, { Country } from "./Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Jackson"
        age={25}
        email="ded@ded.com"
        isMarried={true}
        country= {Country.Canada}
        friends={["Jessica", "Jhenny", "Jhonson"]}
      />
    </div>
  );
}

export default App;
