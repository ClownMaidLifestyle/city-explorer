import axios from "axios";
import './App.css';

function App() {
  console.log(process.env.REAC_APP_KEY);
  return (
    <div className="App">
      <form>
      <input type="text" placeholder="Explore!" name="input"/>
      <button type="submit">Explore!</button>
      </form>
    </div>
  );
}

export default App;
