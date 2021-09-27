import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Main() {
    return (
        <div className="mainProduct">
            <Container>
                <Row style={{justifyContent: "center"}}>
                    <Col xs={'4'} >
                        <Image src="https://firebasestorage.googleapis.com/v0/b/teamproject-4b829.appspot.com/o/%E1%84%88%E1%85%A2%E1%84%85%E1%85%A91.png?alt=media&token=419a94da-fd49-46d0-941d-ae912b0da91c" rounded width="100%" />
                    </Col>
                    <Col xs={'6'} style={{paddingTop:"1%"}}  >
                        <h4> 🐈‍⬛</h4>
                        <p style={{color: "grey"}}>2021년 9월 27일</p>
                        <p>TV가 재미없는 빼로</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main;