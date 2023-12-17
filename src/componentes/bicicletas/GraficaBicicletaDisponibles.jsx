import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header';
import Footer from '../footer';
import { LinearProgress} from '@mui/material';
import DatePicker from "react-datepicker";

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
ChartJS.register( 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    ArcElement, 
    Title, 
    Tooltip, 
    Legend );

const barOptions = {
    indexAxis: 'x',
    elements: {
        bar:{
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins:{
        legend: {
            position: 'left',
            title: {display: true, text: "Abono de bicicletas"},
        },       
    },
};
const pieOptions = {
    responsive: true,
    plugins:{
        legend: {
            position: 'top',
            title: {display: true, text: "Uso total de bicicletas"},
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

    useEffect(() => {
        const label = [];
        const datasetHorasTotalesUsoBicicletas = [];
        const datasetHorasTotalesDisponibilidadBicicletasAnclajes = [];
        const datasetHorasTotalesServicioBicicletas = [];
        const datasetMediaDisponibilidadBicicletas = [];
        const datasetUsoAbonadoAnual = [];
        const datasetUsoAbonadoOcasional = [];
        const datasetTotalUsos = [];

        let inicio = "01/01/2051";
        let final = "31/12/2051";

        if (startDate !== null){
            if((Number(startDate.getDate())+1) in [1,2,3,4,5,6,7,8,9]){
                if((Number(startDate.getMonth())+1) in [1,2,3,4,5,6,7,8,9]){
                    inicio = "0"+(Number(startDate.getMonth())+1)+"/0"+startDate.getDate()+"/"+startDate.getFullYear();
                }else{
                    inicio = (Number(startDate.getMonth())+1)+"/0"+startDate.getDate()+"/"+startDate.getFullYear();
                }
            }else{
                if((Number(startDate.getMonth())+1) in [1,2,3,4,5,6,7,8,9]){
                    inicio = "0"+(Number(startDate.getMonth())+1)+"/"+startDate.getDate()+"/"+startDate.getFullYear();
                }else{
                    inicio = (Number(startDate.getMonth())+1)+"/"+startDate.getDate()+"/"+startDate.getFullYear();
                }
            }
        }
        if (endDate !== null){
            if((Number(endDate.getDate())+1) in [1,2,3,4,5,6,7,8,9]){
                if((Number(endDate.getMonth())+1) in [1,2,3,4,5,6,7,8,9]){
                    final = "0"+(Number(endDate.getMonth())+1)+"/0"+endDate.getDate()+"/"+endDate.getFullYear();
                }else{
                    final = (Number(endDate.getMonth())+1)+"/0"+endDate.getDate()+"/"+endDate.getFullYear();
                }
            }else{
                if((Number(endDate.getMonth())+1) in [1,2,3,4,5,6,7,8,9]){
                    final = "0"+(Number(endDate.getMonth())+1)+"/"+endDate.getDate()+"/"+endDate.getFullYear();
                }else{
                    final = (Number(endDate.getMonth())+1)+"/"+endDate.getDate()+"/"+endDate.getFullYear();
                }
            }
        }
        

        axios.get('https://anthemmanifest.onrender.com/bicicletasDisponibilidad')
            .then((resultado) => {
                
                setRows(resultado.data);
                for(const valor of resultado.data){
                    // label.push(valor.DIA);
                    datasetHorasTotalesUsoBicicletas.push(valor.HORAS_TOTALES_USOS_BICICLETAS);
                    datasetHorasTotalesDisponibilidadBicicletasAnclajes.push(valor.HORAS_TOTALES_DISPONIBILIDAD_BICICLETAS_EN_ANCLAJES);
                    datasetHorasTotalesServicioBicicletas.push(valor.TOTAL_HORAS_SERVICIO_BICICLETAS);
                    datasetMediaDisponibilidadBicicletas.push(valor.MEDIA_BICICLETAS_DISPONIBLES);
                    if(valor.USOS_ABONADO_ANUAL < 200 && valor.USOS_ABONADO_OCASIONAL < 200){
                        label.push(valor.DIA);
                        datasetUsoAbonadoAnual.push(valor.USOS_ABONADO_ANUAL);
                        datasetUsoAbonadoOcasional.push(valor.USOS_ABONADO_OCASIONAL);
                    }
                    if(valor.DIA >= inicio && valor.DIA <= final ){
                        label.push(valor.DIA);
                        datasetTotalUsos.push(valor.TOTAL_USOS);
                    }
                }
                setBarData({
                    labels: label,
                    datasets: [
                        {
                            label: "Dataset Abono Anual",
                            data: datasetUsoAbonadoAnual,
                            borderColor: 'rgb(255,99,123)',
                            backgroundColor: 'rgba(255,99,123,0.5)',
                        },
                        {
                            label: "Dataset Abono Ocasional",
                            data: datasetUsoAbonadoOcasional,
                            borderColor: 'rgb(53,162,235)',
                            backgroundColor: 'rgba(53,162,235,0.5)',
                        }
                    ],   
                });
                setPieData({
                    datasets: [{
                        data: datasetTotalUsos,
                        backgroundColor:["Red", "Yellow", "Blue"] 
                    }],
                    labels: label,
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
            <div style={{width: '80%', height: '50%'}}>
                <Bar data={barData} options={barOptions}/>
            </div>
            <div style={{width: '50%', height: '50%'}}>
                {/* <h3>Uso total de bicicletas</h3> */}
                <Pie data={pieData} options={pieOptions}/>
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
            </div>
            <br />
            <Footer />
        </div>
    );
}