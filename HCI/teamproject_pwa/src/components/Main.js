import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function Main() {
    return (
        <div className="mainProduct">
            <Container>
                <Row style={{justifyContent: "center"}}>
                    <Col xs={4} >
                        <Image src="https://firebasestorage.googleapis.com/v0/b/teamproject-4b829.appspot.com/o/%E1%84%88%E1%85%A2%E1%84%85%E1%85%A91.png?alt=media&token=419a94da-fd49-46d0-941d-ae912b0da91c" rounded width="100%" />
                    </Col>
                    <Col xs={6} style={{backgroundColor: "dimgrey"}} >
                        <h1>Title</h1>
                        <h4>Descriptions</h4>
                        <Button variant="light" style={{marginBottom: "3%"}}  >Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main;