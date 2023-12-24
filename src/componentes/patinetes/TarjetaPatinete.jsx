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
            if(valor > 0){
                setContadorPatinete(Number(contadorPatinete)+1);
                setCompañia(nombre);
                añadirQuitar.current = boton;
            }
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

    const disableZeroA = () => {
        if(patinete.ACCIONA <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "ACCIONA", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "ACCIONA", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            return (
                <div>
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
                </div>
            );
        }
    }
    
    const disableZeroB = () => {
        if(patinete.BIRD <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "BIRD", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "BIRD", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            return (
                <div>
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
                </div>
            );
        }
    }

    const disableZeroT = () => {
        if(patinete.Taxify <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "Taxify", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "Taxify", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            return (
                <div>
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
                </div>
            );
        }
    }

    const disableZeroK = () => {
        if(patinete.KOKO <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "KOKO", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "KOKO", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            console.log("mayor a cero")
            return (
                <div>
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
                </div>
            );
        }
    }

    const disableZeroU = () => {
        if(patinete.UFO <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "UFO", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "UFO", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            console.log("mayor a cero")
            return (
                <div>
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
                </div>
            );
        }
    }

    const disableZeroR = () => {
        if(patinete.RIDECONGA <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "RIDECONGA", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "RIDECONGA", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            return (
                <div>
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
                </div>
            );
        }
    }

    const disableZeroF = () => {
        if(patinete.FLASH <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "FLASH", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "FLASH", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            return (
                <div>
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
                </div>
            );
        }
    }

    const disableZeroL = () => {
        if(patinete.LIME <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "LIME", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "LIME", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            return (
                <div>
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
                </div>
            );
        }
    }

    const disableZeroRR = () => {
        if(patinete.REBY_RIDES <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "REBY RIDES", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "REBY RIDES", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "REBY RIDES", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "REBY RIDES", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }
    }

    const disableZeroMO = () => {
        if(patinete.MOVO <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "MOVO", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "MOVO", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            return (
                <div>
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
                </div>
            );
        }
    }

    const disableZeroMG = () => {
        if(patinete.MYGO <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "MYGO", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "MYGO", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            return (
                <div>
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
                </div>
            );
        }
    }

    const disableZeroJU = () => {
        if(patinete.JUMP_UBER <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "JUMP UBER", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "JUMP UBER", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "JUMP UBER", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "JUMP UBER", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }
    }

    const disableZeroSC = () => {
        if(patinete.SJV_CONSULTING <= 0){
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' disabled onClick={añadirQuitarPatinete(patinete._id, "SJV CONSULTING", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' disabled onClick={añadirQuitarPatinete(patinete._id, "SJV CONSULTING", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }else{
            return (
                <div>
                    <Tooltip title="Añadir patinete">
                        <IconButton color='success' onClick={añadirQuitarPatinete(patinete._id, "SJV CONSULTING", patinete.ACCIONA, "AÑADIR")}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Quitar patinete">
                        <IconButton color='error' onClick={añadirQuitarPatinete(patinete._id, "SJV CONSULTING", patinete.ACCIONA, "QUITAR")}>
                            <Remove/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
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
        console.log(patinete.Taxify);

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
                            {disableZeroA()}
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
                            
                            {disableZeroT()}
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
                            {disableZeroK()}
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
                            {disableZeroU()}
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
                            {disableZeroR()}
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
                            {disableZeroF()}
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
                            {disableZeroL()}
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
                            {disableZeroB()}
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
                            {disableZeroRR()}
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
                            {disableZeroMO()}
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
                            {disableZeroMG()}
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
                            {disableZeroJU()}
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
                            {disableZeroSC()}
                        </CardBody>
                    </Card>
                </Col>
            </Row>    
        </Container>
    );
}