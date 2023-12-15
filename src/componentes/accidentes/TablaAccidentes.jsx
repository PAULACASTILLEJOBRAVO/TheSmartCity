import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header';
import Footer from '../footer';
import { styled } from '@mui/material/styles';
import {Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TablePagination, Paper, CircularProgress, Box} from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function TablaAccidente() {
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowPerPage, setRowPerPage] = useState(5000);

    useEffect(() => {
        axios.get('https://anthemmanifest.onrender.com/accidentalidad')
            .then((resultado) => {
                setRows(resultado.data);
            }, [])
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleRowsPerPage = (event) => {
        setRowPerPage(+event.target.value);
        setPage(0);
    }

    return rows.length === 0 ? (
        <div style={{ textAlign: "center" }}>
            <Header />
            <h1 style={{paddingTop: "2%", paddingBottom: "3%"}}>Accidentes</h1>
            <Paper sx={{ width: '90%', marginLeft: '5%' }}>
                <TableContainer component={Paper} sx={{maxHeight: 450}}>
                    <Table sx={{minWidth: 700 }} aria-label="customized table" >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="right">Fecha</StyledTableCell>
                                <StyledTableCell align="right">Hora</StyledTableCell>

                                <StyledTableCell align="right">Localización</StyledTableCell>
                                <StyledTableCell align="right">Distrito</StyledTableCell>


                                <StyledTableCell align="right">Tipo de accidente</StyledTableCell>
                                <StyledTableCell align="right">Estado meteorológico</StyledTableCell>

                                <StyledTableCell align="right">Sexo</StyledTableCell>
                                <StyledTableCell align="right">Rango de edad</StyledTableCell>

                                <StyledTableCell align="right">Alcoholemia</StyledTableCell>
                                <StyledTableCell align="right">Examen toxicológico</StyledTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                    <Box sx={{ display: 'flex'}} style={{justifyContent: 'center'}}>
                        <CircularProgress color='success'/>
                    </Box>
                    <TablePagination
                            rowsPerPageOptions={[5000, 10000, 20000, 30000, 40000]}
                            page={page}
                            count={rows.length}
                            rowsPerPage={rowPerPage}
                            component="div"
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleRowsPerPage}
                        />
                </TableContainer>
            </Paper>
            <br />
            <Footer />
        </div>
    ):(
        <div style={{ textAlign: "center" }}>
            <Header />
            <h1 style={{paddingTop: "2%", paddingBottom: "3%"}}>Accidentes</h1>
            <Paper sx={{ width: '90%', marginLeft: '5%' }}>
                <TableContainer component={Paper} sx={{maxHeight: 450}}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" stickyHeader>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="right">Fecha</StyledTableCell>
                                <StyledTableCell align="right">Hora</StyledTableCell>

                                <StyledTableCell align="right">Localización</StyledTableCell>
                                <StyledTableCell align="right">Distrito</StyledTableCell>


                                <StyledTableCell align="right">Tipo de accidente</StyledTableCell>
                                <StyledTableCell align="right">Estado meteorológico</StyledTableCell>

                                <StyledTableCell align="right">Sexo</StyledTableCell>
                                <StyledTableCell align="right">Rango de edad</StyledTableCell>


                                <StyledTableCell align="right">Alcoholemia</StyledTableCell>
                                <StyledTableCell align="right">Examen toxicológico</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowPerPage, page * rowPerPage + rowPerPage).map((row) => (
                                <StyledTableRow key={row._id}>
                                    <StyledTableCell align="right">{row.fecha}</StyledTableCell>
                                    <StyledTableCell align="right">{row.hora}</StyledTableCell>

                                    <StyledTableCell component="th" scope="row">{row.localizacion}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row">{row.distrito}</StyledTableCell>
                                    
                                    <StyledTableCell component="th" scope="row">{row.tipo_accidente}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row">{row.estado_meteorologico}</StyledTableCell>
                                    

                                    <StyledTableCell align="right">{row.sexo}</StyledTableCell>
                                    <StyledTableCell align="right">{row.rango_edad}</StyledTableCell>

                                    <StyledTableCell align="right">{row.positivo_alcohol}</StyledTableCell>
                                    <StyledTableCell align="right">{row.positivo_droga}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                            rowsPerPageOptions={[5000, 10000, 20000, 30000, 40000]}
                            page={page}
                            count={rows.length}
                            rowsPerPage={rowPerPage}
                            component="div"
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleRowsPerPage}
                        />
                </TableContainer>
            </Paper>
            <br />
            <Footer />
        </div>
    );
}