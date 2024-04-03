



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Row } from 'react-bootstrap';


import {Col } from  'react-bootstrap';

function Main2() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>


        

          <Navbar.Brand href="#home">Navbar</Navbar.Brand>


           
        





          <Nav className="me-auto">

            <Container>


               <Row>

                 <Col>


            <Nav.Link  href="#home">Home</Nav.Link>

             </Col>




            </Row>

            <Row>

          <Col>


        <Nav.Link  href="#home">Diamond</Nav.Link>

         </Col>




         </Row>






            </Container>

            <Nav.Link  href="#features">Features</Nav.Link>
            

            <Nav.Link  href="#features">Features</Nav.Link>


            <Nav.Link  href="#pricing">Pricing</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default Main2;















