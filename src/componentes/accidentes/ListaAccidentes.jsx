import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header';
import Footer from '../footer';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

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

export default function Test() {
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowPerPage, setRowPerPage] = useState(5000);

    useEffect(() => {
        axios.get('https://anthemmanifest.onrender.com/test')
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

    return (
        <div style={{ textAlign: "center" }}>
            <Header />
            <br />
            <br />
            <br />
            <h1>Accidentes</h1>
            <Paper sx={{ width: '90%', marginLeft: '5%' }}>
                <TableContainer component={Paper} sx={{maxHeight: 450}}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" stickyHeader>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell align="right">Fecha</StyledTableCell>
                                <StyledTableCell align="right">Hora</StyledTableCell>
                                <StyledTableCell align="right">Sexo</StyledTableCell>
                                <StyledTableCell align="right">Rango de edad</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowPerPage, page * rowPerPage + rowPerPage).map((row) => (
                                <StyledTableRow key={row.num_expediente}>
                                    <StyledTableCell component="th" scope="row">{row._id}</StyledTableCell>
                                    <StyledTableCell align="right">{row.fecha}</StyledTableCell>
                                    <StyledTableCell align="right">{row.hora}</StyledTableCell>
                                    <StyledTableCell align="right">{row.sexo}</StyledTableCell>
                                    <StyledTableCell align="right">{row.rango_edad}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                        <TablePagination
                            rowsPerPageOptions={[5000, 10000, 20000, 30000, 40000]}
                            page={page}
                            count={rows.length}
                            rowsPerPage={rowPerPage}
                            component="div"
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleRowsPerPage}
                        />
                    </Table>
                </TableContainer>
            </Paper>
            <br />
            <Footer />
        </div>
    );
}