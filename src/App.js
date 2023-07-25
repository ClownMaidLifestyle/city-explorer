import axios from "axios";
import './App.css';
import { useState } from "react";

function App() {

  let REACT_APP_KEY = "pk.0988406d58ca554ca26fe1365768841f";
  const [SearchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState({});
  const [map, setMap] = useState("");

  async function getLocation(event){
    //event.target.input.value = "";
    event.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?key=${REACT_APP_KEY}&q=${SearchQuery}&format=json`;
    let result = await axios.get(API);
    console.log(result);
    setLocation(result.data[0]);
    handleMap(result);
    console.log(API);
  }

  function handleSearch(event){
    setSearchQuery(event.target.value);
  }

  function handleMap(result){
    const API = `https://maps.locationiq.com/v3/staticmap?key=${REACT_APP_KEY}&center=${result.data[0].lat},${result.data[0].lon}&zoom=9`;
    setMap(API);
  }
  return (
    <div className="App">
      <form onSubmit={getLocation}>
      <input type="text" placeholder="Find a Destination" name="input" onChange={handleSearch}/>
      <button type="submit">Explore!</button>
      </form>

      <p>{location.display_name}</p>
      <p>{map && <img src={map} alt="map" />}</p>
    </div>
  );
}

export default App;
