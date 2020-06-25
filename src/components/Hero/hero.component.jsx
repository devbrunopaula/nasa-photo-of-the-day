import React from 'react'
import styled from 'styled-components'
import DatePicker from '../Date/date.component'
import Video from '../Video/video.component'



function Hero(props) {
 
const { title, explanation, copyright } = props.data

  const Picture = () => {
    return (
      <HeroImage>
        <HeroTitle>{title}</HeroTitle>
        <HeroCaption>{explanation}<TakenBy>Photo by: {copyright || "Bruno Paula"}</TakenBy></HeroCaption>
        <DatePicker setDate={props.setDate}/>
      </HeroImage>
    )
  }

  // Rendering Image or Video
  
    return props.data.media_type === "video" ? <Video data={props} setDate={props.setDate}/> : <Picture /> 
     
}

export default Hero


// Styled Components

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  position:relative;
  width: 100vw;
  height: calc(100vh - 86px);
  background-image: linear-gradient(-16deg, rgba(0,0,0,0.3169642857142857) 16%, rgba(255,255,255,0.4374124649859944) 100%), url(${ props => props.theme.data.url});
  background-size: cover;
`

const HeroTitle = styled.h1`
  color: #FFFFFF;
  font-size: 4em;
  text-align: center;
`

const HeroCaption = styled.div`
  width: 60%;
  color: white;
  background-color: rgb(0,0,0,0.5);
  border-radius: 15px;
  text-align: center;
  padding: 40px;
  margin-bottom: 20px;
`

const TakenBy = styled.p`
  padding-top: 25px;
  color: #f8f8f8;
  font-style:italic;
`