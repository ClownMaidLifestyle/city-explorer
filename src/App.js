import axios from "axios";
import './App.css';
import { useState } from "react";

function App() {
  
  const [SearchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState({});
  const [map, setMap] = useState("");

  async function getLocation(event){
    //event.target.input.value = "";
    event.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY}N&q=${SearchQuery}&format=json`;
    let result = await axios.get(API);
    setLocation(result[0]);
    console.log(API);
  }

  function handleSearch(event){
    setSearchQuery(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={getLocation}>
      <input type="text" placeholder="Find a Destination" name="input" onChange={handleSearch}/>
      <button type="submit">Explore!</button>
      </form>

      <p>{location.display_name}</p>
    </div>
  );
}

export default App;
