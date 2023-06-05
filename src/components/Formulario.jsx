import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Clima from "./Clima";

const Formulario = () => {

    const [clima, setClima] = useState({
        name:'',
        country:'',
        temp:'',
        humidity:''
    });
    const [ciudad, setCiudad] = useState('');
    const [pais, setPais] = useState('')

    
    useEffect(() =>{
        consultarAPI(ciudad,pais);
    },[ciudad, pais]);

    

    const consultarAPI = async (ciudad, pais) =>{
        try {
            const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad || 'tucuman'},${pais || 'argentina'}&appid=1e20b7cdd06e771a348949d89d6ec268&units=metric`);
            const datos = await respuesta.json();
            setClima({
                name: datos.name,
                country: datos.sys.country,
                temp: datos.main.temp,
                humidity: datos.main.humidity
            })
            console.log(datos)
            setClima(datos);
        } catch (error) {
            
            console.log('error');
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCiudad(e.target.ubicacion.value);
        setPais(e.target.pais.value);
    }
    
    return (
        <section>
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
            <Clima clima={clima}/>
        </section>
    );
};

export default Formulario;