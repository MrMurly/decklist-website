import { Navbar, Container, Nav } from "react-bootstrap";
import { useDecklistStore } from "../store/deckliststore";
import { useAuth } from "./Login/useAuth";

export function Header()
{
  const { login, authorized } = useAuth();
  const { logout } = useDecklistStore();

  return <><Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">decklist.lol</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/e/new">Create Event</Nav.Link>
        </Nav>
        <Nav>
          {authorized ? (
            <>
              <Nav.Link onClick={() => logout()}>Log out</Nav.Link>
            </>
            ) :
            (
              <>
                <Nav.Link onClick={() => login()}>Log in</Nav.Link>
              </>
            )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Container id='top-floating-container'>
  </Container>
</>
}