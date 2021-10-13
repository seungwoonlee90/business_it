import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Main.css';

function Main() {

    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.longitude, position.coords.latitude)
        })
    }


    return (
        <>
        <div>
            <div className="mainProduct">
                <Container>
                    <Row className="mainImg">
                        <Col>
                            <Image src="http://animal.seoul.go.kr/comm/getImage?srvcId=MEDIA&upperNo=1223&fileTy=ADOPTIMG&fileNo=7&thumbTy=L" rounded width="150px"/>
                        </Col>
                        <Col className="mainDesc">
                            <h4> 🐶</h4>
                            <p>요크셔테리어(M)</p>
                            <p>5세 2개월</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mainProduct">
                <Container>
                    <Row className="mainImg">
                        <Col>
                            <Image src="http://animal.seoul.go.kr/comm/getImage?srvcId=MEDIA&upperNo=1224&fileTy=ADOPTIMG&fileNo=2&thumbTy=L" rounded width="150px"/>
                        </Col>
                        <Col className="mainDesc">
                            <h4>🐶</h4>
                            <p>믹스(W)</p>
                            <p>1세 2개월</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default Main;