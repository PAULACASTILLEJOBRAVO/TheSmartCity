import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header';
import Footer from '../footer';
import { LinearProgress} from '@mui/material';
import DatePicker from "react-datepicker";
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
    ArcElement} from 'chart.js';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import zoomPlugin from "chartjs-plugin-zoom";
ChartJS.register( 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    ArcElement, 
    Title, 
    Tooltip, 
    Legend,
    zoomPlugin );

const barOptions = {
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

export default function GraficaBicicletaDisponible() {
    const [rows, setRows] = useState([]);
    const [startDate, setStartDate] = useState(new Date(2051, 0, 1));
    const [endDate, setEndDate] = useState(new Date(2051, 11, 31));
    const [barData, setBarData] = useState({
        labels: [],
        datasets: [
            {
                label: "Dataset 1",
                data: [],
                borderColor: 'rgb(255,99,123)',
                backgroundColor: 'rgba(255,99,123,0.5)',
            },
            {
                label: "Dataset 2",
                data: [],
                borderColor: 'rgb(53,162,235)',
                backgroundColor: 'rgba(53,162,235,0.5)',
            },
        ],   
    });

    const [ pieData, setPieData] = useState({
        datasets: [{
            data: [],
            backgroundColor:["Red", "Yellow", "Blue"],
        }],
    });

    const getRandomColors = (numOfBars) =>{
        const letters = "0123456789ABCDEF".split("");
        let colors = [];
        for(let i = 0; i < numOfBars; i++){
            let color = "#";
            for (let k = 0; k < 6; k++){
                color += letters[Math.floor(Math.random() * 16)];
            }
            colors.push(color);
        }
        return colors;
    }

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
                    
                    datasetHorasTotalesUsoBicicletas.push(valor.HORAS_TOTALES_USOS_BICICLETAS);
                    datasetHorasTotalesDisponibilidadBicicletasAnclajes.push(valor.HORAS_TOTALES_DISPONIBILIDAD_BICICLETAS_EN_ANCLAJES);
                    datasetHorasTotalesServicioBicicletas.push(valor.TOTAL_HORAS_SERVICIO_BICICLETAS);
                    datasetMediaDisponibilidadBicicletas.push(valor.MEDIA_BICICLETAS_DISPONIBLES);
                    if(valor.USOS_ABONADO_ANUAL < 200){
                        label.push(valor.DIA);
                        datasetUsoAbonadoAnual.push(valor.USOS_ABONADO_ANUAL);
                        datasetUsoAbonadoOcasional.push(valor.USOS_ABONADO_OCASIONAL);
                    }

                    let fecha = new Date();
                    if((Number(valor.DIA.slice(-7,-5))-1) in [1,2,3,4,5,6,7,8,9]){
                        fecha = new Date(valor.DIA.slice(-4),"0"+(Number(valor.DIA.slice(-7,-5))-1),valor.DIA.slice(0,2));
                    }else{
                        fecha = new Date(valor.DIA.slice(-4),Number(valor.DIA.slice(-7,-5))-1,valor.DIA.slice(0,2));
                    }
                        
                    if(fecha >= startDate && fecha <= endDate ){
                        datasetTotalUsos.push(valor.TOTAL_USOS);
                    }
                }
                setBarData({
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
                setPieData({
                    datasets: [{
                        data: datasetTotalUsos,
                        backgroundColor: getRandomColors(label.length)
                    }],
                })
            }, [])
    });

    const handleChangeDate = (date) => {
        setStartDate(date[0]);
        setEndDate(date[1]);
    }
    
    return rows.length === 0 ? (
        <div style={{ textAlign: "center" }}>
            <Header />
            <h1 style={{paddingTop: "2%", paddingBottom: "3%"}}>Estadísticas de las bicicletas</h1>
           <LinearProgress/>
            <br />
            <Footer />
        </div>
    ):(
        <div style={{ textAlign: "center" }}>
            <Header />
            <h1 style={{paddingTop: "2%"}}>Estadísticas de las bicicletas</h1>
            <Container>
                <Row>
                    <Col lg="6" xs="6">    
                        <h3>Abono de bicicletas</h3>

                            <Bar data={barData} options={barOptions}/>

                    </Col>
                    <Col lg="6" xs="6">
                        <h3>Uso total de bicicletas</h3>
                        <div style={{paddingLeft: "30%", paddingRight: "30%"}}>
                            <Pie data={pieData}/>
                        </div>
                        <DatePicker 
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={handleChangeDate} 
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date(2051, 0, 1)}
                            maxDate={new Date(2051, 11, 31)}
                            isClearable
                            showMonthDropdown
                            scrollableMonthYearDropdown
                        />  
                    </Col>
                </Row>
            </Container>
            <br />
            <Footer />
        </div>
    );
}