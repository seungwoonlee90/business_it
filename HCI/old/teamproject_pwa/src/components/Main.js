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
                            <h4> ๐โโฌ</h4>
                            <p>2021๋ 9์ 27์ผ</p>
                            <p>TV๊ฐ ์ฌ๋ฏธ์๋ ๋นผ๋ก</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default Main;