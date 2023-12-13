import * as React from 'react';
import {Box,  Divider, Typography} from '@mui/material';
import { CardBody, CardHeader, CardTitle, Card, Row, Col, Container } from 'reactstrap';

export default function MediaControlCard({ patinete }) {

  return (
        <div>
            <Container>
                <Row>
                    <Col xs="3" sm="6" md="6" lg="12">
                        <Card className="my-2"
                        color="primary"
                        inverse>
                            
                            <CardHeader>
                                ACCIONA
                            </CardHeader>
                            <CardBody>
                                <CardTitle>
                                    {patinete.ACCIONA} patinetes disponibles
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="3" sm="6" md="6" lg="12">
                        <Card className="my-2"
                        color="primary"
                        inverse>
                            
                            <CardHeader>
                                Taxify
                            </CardHeader>
                            <CardBody>
                                <CardTitle>
                                    {patinete.Taxify} patinetes disponibles
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="3" sm="6" md="6" lg="12">
                        <Card className="my-2"
                        color="primary"
                        inverse>
                            
                            <CardHeader>
                                KOKO
                            </CardHeader>
                            <CardBody>
                                <CardTitle>
                                    {patinete.KOKO} patinetes disponibles
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="3" sm="6" md="6" lg="12">
                        <Card className="my-2"
                        color="primary"
                        inverse>
                            
                            <CardHeader>
                                UFO
                            </CardHeader>
                            <CardBody>
                                <CardTitle>
                                    {patinete.UFO} patinetes disponibles
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    
                </Row>      
            </Container>
        </div> 
    );
}