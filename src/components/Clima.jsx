import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Clima = ({clima}) => {
  console.log(clima)
  console.log(clima.temp)
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mx-auto">
        <ListGroup variant="flush">
          <ListGroup.Item>📍 Ubicacion: {clima.name}, {clima.country} </ListGroup.Item>
          <ListGroup.Item>
            🌡Temperatura actual: {clima.temp}°C
          </ListGroup.Item>
          <ListGroup.Item>💧 Humedad: {clima.humidity}%</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

Clima.propTypes = {
  clima: PropTypes.object, 
};

export default Clima;
