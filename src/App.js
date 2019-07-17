import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";

// const [file, setFile] = useState();


// console.log(file.date)

function App() {
  const [file, setFile] = useState();
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=zZp02OALIOiVrMFtA2rwcnuYN4lnSFWMHQqX2BA6')
    .then((info) => {
      setFile(info.data)
      console.log('API Data: ', info.data)
    })
    .catch(error => {
      console.log('This API is not functional: ', error)
    })
  }, [])
  console.log(file.date)
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
