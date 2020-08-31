import React from 'react';
import '../node_modules/semantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react';
import Navigation from './components/Navigation';
import { Router } from '@reach/router';
import ProfileComponent from './components/ProfileComponent';
import AccountPage from './components/AccountPage';
import AddAccountPage from './components/AddAccountPage';
import LinkAccountPage from './components/LinkAccountPage';
import DeleteAccountPage from './components/DeleteAccountPage';

function App() {

  const Home = () => <h1>Home</h1>

  return (
    <>
      <Container style={{ margin: 50 }}>
        <Navigation />
        <Router>
          <Home path="/" />
          <ProfileComponent path="profile" />
          <AccountPage path="accounts" />
          <AddAccountPage path="accounts/add" />
          <DeleteAccountPage path="accounts/delete" />
          <LinkAccountPage path="accounts/link" />
        </Router>
      </Container>
    </>
  );
}

export default App;