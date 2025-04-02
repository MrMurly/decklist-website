import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { EventView } from './Components/Events/EventView.tsx';
import { LoggedIn } from './Components/Login/LoggedIn.tsx';
import { LandingPage } from './Components/LandingPage/LandingPage.tsx';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

import { AuthProvider } from './Components/Login/AuthContext.tsx';
import { CreateEvent } from './Components/Events/CreateEvent.tsx';
import { DeckView } from './Components/Events/DeckView.tsx';
import { QRCodeView } from './Components/Events/Views/QRCodeView';
import { DecklistHelp } from './Components/Help/DecklistHelp';
import { PrivacyHelp } from './Components/Help/PrivacyPolicy';
import { TermsAndServicesHelp } from './Components/Help/TermsAndServices';
import { MutliEventView } from './Components/Events/MultiEventView.tsx';
import { ContributeHelp } from './Components/Help/Contribute.tsx';
import { About } from './Components/Help/About.tsx';
import { Header } from './Components/Header.tsx';
import { Footer } from './Components/Footer.tsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/multi/:hub_name",
    element:
      <MutliEventView/>
  },
  {
    path: "/e/new",
    element:
      <LoggedIn>
        <CreateEvent />
      </LoggedIn>,
  },
  {
    path: "/e/:event_id",
    element:
      <EventView />
  },
  {
    path: "/e/:event_id/deck",
    element:
    <LoggedIn>
      <DeckView />
    </LoggedIn>,
  },
  {
    path: "/e/:eventId/qr",
    element: <QRCodeView />
  },
  {
    path: "/help/decklist",
    element: <DecklistHelp />
  },
  {
    path: "/help/privacy",
    element: <PrivacyHelp />
  },
  {
    path: "/help/terms-and-services",
    element: <TermsAndServicesHelp />
  },
  {
    path: "/help/contribute",
    element: <ContributeHelp />
  },
  {
    path: "/help/about",
    element: <About />
  },
]);

function App() {
  return (
    <>
    <AuthProvider>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="py-3 py-md-5 flex-grow-1">
          <div className='container'>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    </AuthProvider>
    </>
  );
}




export default App
