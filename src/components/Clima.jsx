import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Clima = ({ clima }) => {
  console.log(clima);
  return (
    <Card style={{ width: "18rem" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Ubicacion: {clima.name}, {clima.sys.country}</ListGroup.Item>
        <ListGroup.Item>Temperatura actual: {clima.main.temp}°C</ListGroup.Item>
        <ListGroup.Item>Temperatura minima: {clima.main.temp_min}°C</ListGroup.Item>
        <ListGroup.Item>Temperatura maxima: {clima.main.temp_max}°C</ListGroup.Item>
        <ListGroup.Item>Humedad: {clima.main.humidity}%</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

Clima.propTypes = {
    clima: PropTypes.arrayOf(PropTypes.string),
  };

export default Clima;
