import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>"I am Sachin Kumar Pal from Ponda, Goa. Currently, I am pursuing a Bachelor of Computer Application degree from Goa Multi-Faculty College in Dharbandora, Goa. It's essential to have a responsive design for your website as it makes it accessible to all users, regardless of the devices they are using."<br></br>
                        <br></br>

                        Besides coding, another activity I love to do!
                        <br></br>
                        => Photograph
                        <br></br>
                        => Travelling 
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>CSS Tailwind</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Wix</li>
                                    <li>Figma</li>
                                    <li>Material-ui</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage