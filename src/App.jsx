import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import PropTypes from 'prop-types';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
function App() {
  

  return (
    <Container>
      <Formulario/>
      <Clima/>
    </Container>
  )
}

export default App
