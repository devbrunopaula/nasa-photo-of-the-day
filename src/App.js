import React,{useEffect, useState} from "react";
import "./App.css";
import axios from "axios"

function App() {

  const [ data, setData ] = useState([])

  const fetchNasaData =  async ()  =>   {
    try {
      const fetchedData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=4av57rUOmcVq1a3KgBBWoh9YEIgAN8DmqO8u7AO3')
      const response =  fetchedData.data
      setData(response)
    } catch (error) {
      console.log(error)
    }
 }

  useEffect(() => {
    
    fetchNasaData()
  },[])
  

  console.log(data)
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
