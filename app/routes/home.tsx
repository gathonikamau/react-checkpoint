import "bootstrap/dist/css/bootstrap.min.css";

// React-Bootstrap components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      {/* React Fragment */}

      <div className="App">
        {/* NAVBAR */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My React App</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* HEADING */}
        <Container className="mt-4">
          <h1 className="text-center">Welcome to My React-Bootstrap App</h1>
        </Container>

        {/* CARDS SECTION */}
        <Container className="d-flex justify-content-between mt-4">
          {/* CARD 1 */}
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                This is the first card using React-Bootstrap.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          {/* CARD 2 */}
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                This is the second card using React-Bootstrap.
              </Card.Text>
              <Button variant="success">Click Me</Button>
            </Card.Body>
          </Card>

          {/* CARD 3 */}
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                This is the third card using React-Bootstrap.
              </Card.Text>
              <Button variant="warning">Learn More</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default App;
