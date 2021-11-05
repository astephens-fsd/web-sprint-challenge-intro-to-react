
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setDetails] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
      console.log(response);
      setDetails(response.data.results)
    })
    .catch(err => console.log(err));
  },[])

  console.log(data);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        {data.map((char, index)=>
        <Character key={char.url} data={data[index]}/>
        )}
    </div>
  );
}

export default App;
