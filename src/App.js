import './App.css';
import Header from './components/header/header.js';
import Settings from './components/settings/settings.js'
import { Container } from '@material-ui/core';

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <Settings />
      </Container>
    </div>
  );
}

export default App;
