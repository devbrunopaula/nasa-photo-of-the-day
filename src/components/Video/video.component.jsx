import React, { useState } from 'react'
import {Modal, Button, Container} from 'react-bootstrap'
import DatePicker from '../Date/date.component'
import ReactPlayer from 'react-player'
import styled from 'styled-components'


const Video = (props) => {
   
    // State
    const [show, setShow] = useState(false);
  
    // Handles
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const {title, explanation, copyright, url} = props.data.data
    
return (
    <VideoWrapper>
        <HeroTitle>{title}</HeroTitle>
        <ReactPlayer style={{paddingBottom: "20px"}}  width="80vw" height="60vh" pip={true} url={url+'?showinfo=0&enablejsapi=1&origin=http://localhost:3000'} controls={false} /> 
        <Button variant=""  className="date-button"  style={{backgroundColor: "#65696d", marginBottom: "10px", color: '#f2f2f2', width: "106px",height: "30px"}} onClick={handleShow}>More Info</Button>

    <Modal show={show} onHide={handleClose} animation={false} centered >
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="show-grid">
            <Container>
            <HeroCaption style={{width: '100%'}}>{explanation}<TakenBy>Photo by: {copyright || "Bruno Paula"}</TakenBy></HeroCaption>
            </Container>
        </Modal.Body>
    </Modal>
    
<DatePicker setDate={props.setDate}/>
</VideoWrapper>
)
}

export default Video


const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  position:relative;
  width: 100vw;
  height: calc(100vh - 86px);
  background-image: linear-gradient(-16deg, rgba(0,0,0,0.3169642857142857) 16%, rgba(255,255,255,0.4374124649859944) 100%), url('https://images7.alphacoders.com/694/694587.png');
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
`

const TakenBy = styled.p`
  padding-top: 25px;
  color: #f8f8f8;
  font-style:italic;
`