import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Test() {

    const [tests, setTests] = useState([]);
    const [offset, setOffset] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [orgtableData, setOrgtableData] = useState([]);
    const [perPage, setPerPage] = useState([]);
    const [pageCount, setPageCount] = useState([]);


    useEffect(() => {
        axios.get('https://anthemmanifest.onrender.com/test')
            .then((resultado) => {
                const data = resultado.data;
                
                const slice = data.slice(offset, offset+perPage);

                setPageCount(Math.ceil(data.length/perPage));
                setOrgtableData(resultado.data);
                setTableData(data);
            }, [])
        });   
    
    

    return (
        <div>
            <table border="1">
                <thead>
                    <th>Id</th>
                    <th>Num expediente</th>
                    <th>Rango edad</th>
                    <th>Sexo</th>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
        
    );
}