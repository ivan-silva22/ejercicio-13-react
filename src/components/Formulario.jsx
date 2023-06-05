import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {

    // const [clima, setClima] = useState([]);

    useEffect(() =>{
        consultarAPI();
    },[]);

    const consultarAPI = async (ubicacion="tucuman",pais="argentina") =>{
        try {
            const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ubicacion},${pais}&appid=1e20b7cdd06e771a348949d89d6ec268&units=metric`);
            const datos = await respuesta.json();
            console.log(datos.main);
        } catch (error) {
            console.log('error');
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let ubicacion = e.target.ubicacion.value;
        let pais = e.target.pais.value;
        return consultarAPI(ubicacion, pais);
    } 
    
    return (
        <Form className="my-4" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="ubicacion">
                <Form.Label>Ubicación:</Form.Label>
                <Form.Control type="text" placeholder="Tucumán" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pais">
                <Form.Label>País:</Form.Label>
                <Form.Control type="text" placeholder="Argentina" />
            </Form.Group>
            <div className="text-center">
                <Button variant="primary" type="submit">Consultar</Button>
            </div>
        </Form>

    );
};

export default Formulario;