import React from 'react';
import { Navbar, Container, Nav, Card, CardDeck } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1>React Bootstrap App</h1>

          <CardDeck>
            <Card>
              <Card.Img variant="top" src="card-image-1.jpg" />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>This is card 1.</Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="card-image-2.jpg" />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>This is card 2.</Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="card-image-3.jpg" />
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>This is card 3.</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    </>
  );
}

export default App;
