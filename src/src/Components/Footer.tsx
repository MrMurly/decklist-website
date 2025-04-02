import { Container, Nav } from "react-bootstrap";

export function Footer() {
    return (
      <footer className="py-3 mt-auto">
        <Container className="text-center">
          <Nav className="justify-content-center">
            <Nav.Link href="/help/privacy" className="text-reset text-decoration-none">Privacy Policy</Nav.Link>
            <Nav.Link href="/help/terms-and-services" className="text-reset text-decoration-none">Terms of Service</Nav.Link>
            <Nav.Link href="/help/contribute" className="text-reset text-decoration-none">Contribute</Nav.Link>
            <Nav.Link href="/help/About" className="text-reset text-decoration-none">About</Nav.Link>
          </Nav>
          <div className="small mt-2">
            Brought to you with love, for free and with no guarantees.
          </div>
        </Container>
      </footer>
    );
  }
  