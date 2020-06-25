import React, { useState } from 'react';
import Calendar from 'react-calendar'
import dateFormat from 'dateformat'
import {Modal, Button, Container, Row, Col} from 'react-bootstrap'



function DatePicker(props) {

const [value ] = useState(new Date());
const [show, setShow] = useState(false);
  
// Handles
const handleClose = () => setShow(false);
const handleShow = () => setShow(true)

const handleChange = (e) => {
    const userDate = dateFormat(e, 'isoDate')
    props.setDate(userDate)
}


return (
    <>
      <Button variant=""  className="date-button" onClick={handleShow}>Choose A Date</Button>

    <Modal show={show} onHide={handleClose} animation={false} centered >
        <Modal.Header closeButton>
          <Modal.Title>Picture Of The Day</Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="show-grid">
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <Calendar
                            onChange={handleChange}
                            value={value}
                            className="test-cal"
                            maxDate={value}
                        />
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
    </Modal>
    </>
  );
}
export default DatePicker;