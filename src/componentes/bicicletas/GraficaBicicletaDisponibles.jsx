import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header';
import Footer from '../footer';
import { LinearProgress} from '@mui/material';
import { Container, Col, Row } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend, 
    PointElement,
    LineElement} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import zoomPlugin from "chartjs-plugin-zoom";
ChartJS.register( 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    PointElement,
    LineElement,
    Title, 
    Tooltip, 
    Legend,
    zoomPlugin );

const barHorizontalOptions = {
    indexAxis: 'x',
    elements: {
        bar:{
            borderWidth: 2,
        },
    },
    plugins:{
        legend: {
            position: 'bottom',
        },  
        zoom: {
            zoom: {
                wheel: {
                    enabled: true
                },
                mode: "x",
                speed: 100,
            },
            pan: {
                enabled: true,
                mode: "x",
                speed: 0.5,
            },
        },
    },
};

const barVerticaloptions = {
    indexAxis: 'y',
    elements: {
        bar:{
            borderWidth: 2,
        },
    },
    plugins:{
        legend: {
            position: 'bottom',
        },  
        zoom: {
            zoom: {
                wheel: {
                    enabled: true
                },
                mode: "y",
                speed: 100,
            },
            pan: {
                enabled: true,
                mode: "y",
                speed: 0.5,
            },
        },
    },
};

const lineOptions = {
    plugins: {
        zoom: {
            zoom: {
                wheel: {
                    enabled: true
                },
                mode: "x",
                speed: 100,
            },
            pan: {
                enabled: true,
                mode: "x",
                speed: 0.5,
            },
        },
    }
}
export default function GraficaBicicletaDisponible() {
    const [rows, setRows] = useState([]);
    const [barHorData, setBarHorData] = useState({
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
                borderColor: 'rgb(255,99,123)',
                backgroundColor: 'rgba(255,99,123,0.5)',
            },
            {
                label: "",
                data: [],
                borderColor: 'rgb(53,162,235)',
                backgroundColor: 'rgba(53,162,235,0.5)',
            },
        ],   
    });

    const [ barVerData, setBarVerData] = useState({
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
                borderColor: 'rgb(255,99,123)',
                backgroundColor: 'rgba(255,99,123,0.5)',
            },
        ],
    });

    const [ lineData, setLineData] = useState({
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: 'aqua',
            borderColor: 'black',
            pointBorderColor: 'aqua',
        }],
    });

    useEffect(() => {
        const label = [];
        const datasetHorasTotalesUsoBicicletas = [];
        const datasetHorasTotalesDisponibilidadBicicletasAnclajes = [];
        const datasetHorasTotalesServicioBicicletas = [];
        const datasetMediaDisponibilidadBicicletas = [];
        const datasetUsoAbonadoAnual = [];
        const datasetUsoAbonadoOcasional = [];
        const datasetTotalUsos = [];

        axios.get('https://anthemmanifest.onrender.com/bicicletasDisponibilidad')
            .then((resultado) => {
                
                setRows(resultado.data);
                for(const valor of resultado.data){
                    
                    datasetMediaDisponibilidadBicicletas.push(parseFloat(valor.MEDIA_BICICLETAS_DISPONIBLES));
                    
                    if(parseFloat(valor.USOS_ABONADO_ANUAL) < 200){
                        label.push(valor.DIA);
                        datasetUsoAbonadoAnual.push(parseFloat(valor.USOS_ABONADO_ANUAL));
                        datasetUsoAbonadoOcasional.push(parseFloat(valor.USOS_ABONADO_OCASIONAL));
                    }
                        
                    if(parseFloat(valor.TOTAL_USOS) < 20){
                        datasetTotalUsos.push(parseFloat(valor.TOTAL_USOS));
                    }
                }
                setBarHorData({
                    labels: label,
                    datasets: [
                        {
                            label: "Abono Anual",
                            data: datasetUsoAbonadoAnual,
                            borderColor: 'rgb(255,99,123)',
                            backgroundColor: 'rgba(255,99,123,0.5)',
                        },
                        {
                            label: "Abono Ocasional",
                            data: datasetUsoAbonadoOcasional,
                            borderColor: 'rgb(53,162,235)',
                            backgroundColor: 'rgba(53,162,235,0.5)',
                        }
                    ],   
                });
                setBarVerData({
                    labels: label,
                    datasets: [
                        {
                            label: "Bicicletas utilizadas por día",
                            data: datasetTotalUsos,
                            borderColor: 'rgb( 46, 204, 113 )',
                            backgroundColor: 'rgba( 46, 204, 113, 0.5)',
                        },
                    ],
                });
                setLineData({
                    labels: label,
                    datasets: [{
                        label: "Total disponibilidad bicicletas",
                        data: datasetMediaDisponibilidadBicicletas,
                        backgroundColor: 'rgb(227, 255, 0)',
                        borderColor: 'black',
                        pointBorderColor: 'rgb(227, 255, 0)',
                    },
                    ],
                });

                console.log("media", datasetHorasTotalesDisponibilidadBicicletasAnclajes);
            }, [])
    });

    return rows.length === 0 ? (
        <div style={{ textAlign: "center" }}>
            <Header />
            <h1 style={{paddingTop: "3%", paddingBottom: "2%"}}>Estadísticas de las bicicletas</h1>
           <LinearProgress/>
            <br />
            <Footer />
        </div>
    ):(
        <div style={{ textAlign: "center" }}>
            <Header />
            <h1 style={{paddingTop: "2%", paddingBottom: "3%"}}>Estadísticas de las bicicletas</h1>
            <Container>
                <Row > 
                    <Col style={{ paddingBottom: "4%"}} lg="6" xs="12"> 
                        <h3>Número de abonos de bicicletas pagados en Madrid</h3>
                        <Bar data={barHorData} options={barHorizontalOptions}/>
                        <hr/>
                        <h3>Disponibilidad de todas las bicicletas en anclajes en un año para Madrid</h3>
                        <Line data={lineData} options={lineOptions}/>  
                    </Col>

                    <Col lg="6" style={{paddingLeft: "5%"}}>
                        <div style={{position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}>
                            <h3 >Uso total de bicicletas por día en Madrid</h3>
                            <Bar data={barVerData} options={barVerticaloptions}/>
                        </div>
                    </Col>
                </Row > 
            </Container>
            <br />
            <Footer />
        </div>
    );
}