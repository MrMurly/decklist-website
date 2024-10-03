import './App.scss'
import { useDecklistStore } from './store/deckliststore';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { EventList } from './Components/Events/Events.tsx'
import { EventView } from './Components/Events/Event.tsx'
import { LoggedIn } from './Components/Login/LoggedIn.tsx';
import { LandingPage } from './Components/LandingPage/LandingPage.tsx';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthProvider, useAuth } from './Components/Login/AuthContext.tsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/new-event",
    element:
      <LoggedIn>
        <EventList />
      </LoggedIn>,
  },
  {
    path: "/events/:event_id",
    element:
      <EventView />
  },
]);

function App() {
  return (
    <>
    <AuthProvider>
      <NavBar />
      <div className="py-3 py-md-5">
        <div className='container'>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
      </div>
      </div>
    </AuthProvider>
    </>
  );
}

function NavBar()
{
  const { login, authorized } = useAuth();
  const { logout } = useDecklistStore();

  return <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="/">decklist.lol</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/new-event">Create Event</Nav.Link>
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

}

export default App
