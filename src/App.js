import React from 'react';
import '../node_modules/semantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react';
import Navigation from './components/Navigation';
import { Router } from '@reach/router';
import ProfileComponent from './components/ProfileComponent';

function App() {

  const Accounts = () => <h1>Accounts</h1>
  const Home = () => <h1>Home</h1>

  return (
    <>
      <Container style={{ margin: 50 }}>
        <Navigation />
        <Router>
          <Home path="/home" />
          <ProfileComponent path="/profile" />
          <Accounts path="/accounts" />
        </Router>
      </Container>
    </>
  );
}

export default App;