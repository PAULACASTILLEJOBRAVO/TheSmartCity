import * as React from 'react';
import { CardBody, CardHeader, CardTitle, Card, Row, Col, Container } from 'reactstrap';
import {ElectricScooter, Add, Remove} from '@mui/icons-material';
import {IconButton, Tooltip} from '@mui/material';

export default function TarjetaPatinete({ patinete }) {
    return patinete === true ? (
        <Container >
            <Row xs="12">
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            ACCIONA
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            Taxify
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >    
                        <CardHeader>
                            KOKO
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            UFO
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>

                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            RIDECONGA
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            FLASH
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            LIME
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            BIRD
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>

                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            REBY_RIDES
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            MOVO
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            MYGO
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            JUMP_UBER
                            <ElectricScooter/>
                        </CardHeader>
                    </Card>
                </Col>

                <Col lg="3" sm="4" md="4" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            SJV_CONSULTING
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
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            ACCIONA
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.ACCIONA} patinetes disponibles
                            </CardTitle>
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            Taxify
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.Taxify} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            KOKO
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.KOKO} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            UFO
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.UFO} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            RIDECONGA
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.RIDECONGA} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            FLASH
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.FLASH} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            LIME
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.LIME} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            BIRD
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.BIRD} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            REBY_RIDES
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.REBY_RIDES} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            MOVO
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.MOVO} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6"  xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            MYGO
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.MYGO} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            JUMP_UBER
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.JUMP_UBER} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
                                    <Remove/>
                                </IconButton>
                            </Tooltip>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" sm="4" md="6" xs="12">
                    <Card body
                    // color="primary"
                    // inverse
                    >
                        <CardHeader>
                            SJV_CONSULTING
                            <ElectricScooter/>
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                {patinete.SJV_CONSULTING} patinetes disponibles
                            </CardTitle>
                            
                            <Tooltip title="Añadir patinete">
                                <IconButton color='success'>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Quitar patinete">
                                <IconButton color='error'>
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