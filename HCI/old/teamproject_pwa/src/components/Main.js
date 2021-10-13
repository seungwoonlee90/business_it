import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Main.css';

function Main() {

    return (
        <>
        <div>
            <div className="mainProduct">
                <Container>
                    <Row className="mainImg">
                        <Col>
                            <Image src="https://doodleipsum.com/600?shape=circle&bg=ceebff" rounded width="150px"/>
                        </Col>
                        <Col className="mainDesc">
                            <h4> 🐈‍⬛</h4>
                            <p>2021년 9월 27일</p>
                            <p>TV가 재미없는 빼로</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default Main;