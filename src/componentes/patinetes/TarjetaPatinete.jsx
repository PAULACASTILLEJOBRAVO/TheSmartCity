import * as React from 'react';
import axios from 'axios';
import { CardBody, CardHeader, CardTitle, Card, Row, Col, Container } from 'reactstrap';
import {ElectricScooter, Add, Remove} from '@mui/icons-material';
import {IconButton, Tooltip} from '@mui/material';
import store from '../../redux/store';
import { increment } from "../../redux/contador/contador-acciones";
import { add } from '../../redux/informacion/informacion-acciones';
import swal from 'sweetalert';

export default function TarjetaPatinete({ patinete }) {
    const [contadorPatinete, setContadorPatinete] = React.useState(0);
    const [compañia, setCompañia] = React.useState("");
    const añadirQuitar = React.useRef("");

    const añadirQuitarPatinete = (id, nombre, valor, boton) => () => {
        if(boton === "AÑADIR"){
            if(valor > 0){
                store.dispatch(increment());
                setContadorPatinete(Number(contadorPatinete)+1);
                setCompañia(nombre);
                añadirQuitar.current = boton;
                ModificarPatinetes(Number(valor)-1,id);
            }else{
                swal({
                    title: "Error",
                    text: `No hay patinetes disponibles en este momento de ${nombre} en ${patinete.BARRIO}.`, 
                    icon: "error"
                });
            }
        }else if(boton === "QUITAR"){
            if(contadorPatinete >= 0){
                store.dispatch(increment());
                setContadorPatinete(Number(contadorPatinete)-1);
                setCompañia(nombre);
                añadirQuitar.current = boton;
                ModificarPatinetes(Number(valor)+1, id);
            }else{
                swal({
                    title: "Error",
                    text: "No tiene patinetes pedidos.", 
                    icon: "error"
                });
            }
        }
    }

    const ModificarPatinetes = (Taxify, id) => {
        axios.patch("https://anthemmanifest.onrender.com/asignacionPatinetes/"+id, {
            Taxify,
        });
    }

    React.useEffect(() => {
        if(añadirQuitar.current === "AÑADIR"){
            store.dispatch(add(`Tienes solicitados ${contadorPatinete} patinetes de ${compañia} para el barrio de ${patinete.BARRIO}.`));
        }else if(añadirQuitar.current === "QUITAR"){
            if(contadorPatinete >= 0){
                store.dispatch(add(`Tienes solicitados ${contadorPatinete} patinetes de ${compañia} para el barrio de ${patinete.BARRIO}.`));
            }
        }
    }, [contadorPatinete, compañia, patinete]);

    return patinete === true ? (
        <Container >
            <Row xs="12">
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            ACCIONA
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            Taxify
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>    
                        <CardHeader>
                            KOKO
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            UFO
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>

                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            RIDECONGA
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            FLASH
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            LIME
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            BIRD
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>

                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            REBY RIDES
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            MOVO
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            MYGO
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            JUMP UBER
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>

                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body>
                        <CardHeader>
                            SJV CONSULTING
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>    
        </Container>    
    ):(
        <Container >
            <Row xs="12">
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            ACCIONA
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.ACCIONA} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "ACCIONA", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "ACCIONA", patinete.ACCIONA, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            Taxify
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.Taxify} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "Taxify", patinete.Taxify, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "Taxify", patinete.Taxify, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            KOKO
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.KOKO} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "KOKO", patinete.KOKO, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "KOKO", patinete.KOKO, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            UFO
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.UFO} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "UFO", patinete.UFO, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "UFO", patinete.UFO, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            RIDECONGA
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.RIDECONGA} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "RIDECONGA", patinete.RIDECONGA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "RIDECONGA", patinete.RIDECONGA, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            FLASH
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.FLASH} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "FLASH", patinete.FLASH, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "FLASH", patinete.FLASH, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            LIME
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.LIME} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "LIME", patinete.LIME, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "LIME", patinete.LIME, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            BIRD
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.BIRD} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "BIRD", patinete.BIRD, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "BIRD", patinete.BIRD, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            REBY RIDES
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.REBY_RIDES} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "REBY RIDES", patinete.REBY_RIDES, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "REBY RIDES", patinete.REBY_RIDES, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            MOVO
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.MOVO} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "MOVO", patinete.MOVO, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "MOVO", patinete.MOVO, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6"  xs="12">
                    <Card body>
                        <CardHeader>
                            MYGO
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.MYGO} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "MYGO", patinete.MYGO, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "MYGO", patinete.MYGO, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            JUMP UBER
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.JUMP_UBER} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "JUMP UBER", patinete.JUMP_UBER, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "JUMP UBER", patinete.JUMP_UBER, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                            </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body>
                        <CardHeader>
                            SJV CONSULTING
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.SJV_CONSULTING} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "SJV CONSULTING", patinete.SJV_CONSULTING, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "SJV CONSULTING", patinete.SJV_CONSULTING, "QUITAR")}>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
            </Row>    
        </Container>
    );
}