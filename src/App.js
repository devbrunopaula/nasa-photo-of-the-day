import React,{useEffect, useState} from "react";
import "./App.scss";
import axios from "axios"
import Navigation from "./components/Nav/nav.components";
import styled, { ThemeProvider } from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'
import Hero from './components/Hero/hero.component'
import moment from 'moment'


  // Styled Component
  const LoadingCenter = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.364);
  `



function App() {

  // States
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ date, setDate ] = useState('')
  
 
const todaysDate = moment().format('YYYY-MM-DD');
  
const theme = {
  primary: 'blue',
  data: data
}


// Nasa API Fetch
const fetchNasaData = async () => {

  const userDate = (date === "") ? todaysDate : date
  try {
    setLoading(true)
    const fetchedData = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=uB1eBXjQkWTdqlIoGrZK1hHU87mAhq6u4mEipFbm&date=${userDate}`)
    const response =  fetchedData.data
    setData(response)
    setLoading(false)
    
  } catch (error) {
    console.log(error)
    setLoading(true)
  }
}



//  UseEffect
useEffect(() => {
  fetchNasaData()
},[date])



  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
      {loading ? <LoadingCenter><Spinner animation="border" size="lg" variant="secondary" />LOADING...</LoadingCenter> : <Hero data={ data } date={date} setDate={setDate}/>}
    </ThemeProvider>
  );
}

export default App;
