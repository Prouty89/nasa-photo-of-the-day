import React, { useState, useEffect } from "react";
import axios from 'axios'
import Title from './Title'
import "./App.css";
import NasaCard from "./NasaCard";

function App() {
  const[data, setData] = useState();
  const[date, setDate] = useState("2019-07-17")

//Fetch data using hooks
useEffect(() => {
  const fetchData = async () => {
    return await axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        date: date,
        api_key:"zZp02OALIOiVrMFtA2rwcnuYN4lnSFWMHQqX2BA6"
      }
    })
  };
  fetchData()
  .then(response => {
    setData(response.data)
  })
  .catch(error => {
    console.log(error)
  })
}, [date])

const changeEvent = event => {
  setDate(event.target.value);
};
if (!data) {
  return <div className="loading">Loading...</div>;
}

  return (
    <div className="App">
     <Title />
     <NasaCard data={data} />
    </div>
  );
}

export default App;
