import { Button, Form } from "react-bootstrap";

const Formulario = () => {
    return (
        <Form className="my-4">
            <Form.Group className="mb-3" controlId="ubicacion">
                <Form.Label>Ubicación:</Form.Label>
                <Form.Control type="text" placeholder="Tucumán" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pais">
                <Form.Label>País:</Form.Label>
                <Form.Control type="text" placeholder="Argentina" />
            </Form.Group>
            <div className="text-center">
                <Button variant="primary">Consultar</Button>
            </div>
            
        </Form>
    );
};

export default Formulario;