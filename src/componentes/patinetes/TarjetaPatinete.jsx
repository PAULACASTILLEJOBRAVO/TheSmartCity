import * as React from 'react';
import { CardBody, CardHeader, CardTitle, Card, Row, Col, Container } from 'reactstrap';
import {ElectricScooter, Add, Remove} from '@mui/icons-material';
import {IconButton, Tooltip} from '@mui/material';
import store from '../../redux/store';
import { increment } from "../../redux/contador/contador-acciones";
import { add } from '../../redux/informacion/informacion-acciones';

export default function TarjetaPatinete({ patinete }) {
    const [contadorPatinete, setContadorPatinete] = React.useState(0);
    const [compañia, setCompañia] = React.useState("");
    const añadirQuitar = React.useRef("");

    const añadirQuitarPatinete = (id, nombre, valor, boton) => () => {
        store.dispatch(increment())
        if(boton === "AÑADIR"){
            setContadorPatinete(Number(contadorPatinete)+1);
            setCompañia(nombre);
            añadirQuitar.current = boton;
        }else if(boton === "QUITAR"){
            if(contadorPatinete > 0){
                setContadorPatinete(Number(contadorPatinete)-1);
                setCompañia(nombre);
                añadirQuitar.current = boton;
            }else{
                alert("No tiene patinetes pedidos.");
            }
        }
    }

    React.useEffect(() => {
        if(añadirQuitar.current === "AÑADIR"){
            store.dispatch(add(`Agregaste ${contadorPatinete} patinetes de ${compañia} para el barrio de ${patinete.BARRIO}.`));
        }else if(añadirQuitar.current === "QUITAR"){
            if(contadorPatinete > 0){
                store.dispatch(add(`Retiraste ${contadorPatinete} patinetes de ${compañia} para el barrio de ${patinete.BARRIO}.`));
            }
        }
    }, [contadorPatinete, compañia, patinete.BARRIO]);

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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "Taxify", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "Taxify", patinete.ACCIONA, "QUITAR")}>
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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "KOKO", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "KOKO", patinete.ACCIONA, "QUITAR")}>
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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "UFO", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "UFO", patinete.ACCIONA, "QUITAR")}>
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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "RIDECONGA", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "RIDECONGA", patinete.ACCIONA, "QUITAR")}>
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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "FLASH", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "FLASH", patinete.ACCIONA, "QUITAR")}>
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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "LIME", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "LIME", patinete.ACCIONA, "QUITAR")}>
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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "BIRD", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "BIRD", patinete.ACCIONA, "QUITAR")}>
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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "REBY_RIDES", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "REBY_RIDES", patinete.ACCIONA, "QUITAR")}>
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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "MOVO", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "MOVO", patinete.ACCIONA, "QUITAR")}>
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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "MYGO", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "MYGO", patinete.ACCIONA, "QUITAR")}>
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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "JUMP_UBER", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "JUMP_UBER", patinete.ACCIONA, "QUITAR")}>
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
                                <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "SJV_CONSULTING", patinete.ACCIONA, "AÑADIR")}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "SJV_CONSULTING", patinete.ACCIONA, "QUITAR")}>
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