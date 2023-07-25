import axios from "axios";
import './App.css';
import { useState } from "react";

function App() {

  let REACT_APP_KEY = "pk.0988406d58ca554ca26fe1365768841f";
  const [SearchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState({});

  async function getLocation(event){
    //event.target.input.value = "";
    event.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?key=${REACT_APP_KEY}&q=${SearchQuery}&format=json`;
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
