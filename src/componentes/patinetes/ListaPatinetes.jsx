import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header';
import Footer from '../footer';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import {Box, Paper, List, ListItemText, ListSubheader, ListItemButton, Grid } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import TarjetaPatinete from './TarjetaPatinete';

const Nav = styled(List)({
    '& .MuiListItemButton-root': {
      paddingLeft: 24,
      paddingRight: 24,
    }
});

let distrtitosDuplicados = [];
let distrtitos = [];

export default function ListaPatinetes() {
    const [datas, setDatas] = useState([]);
    const [open, setOpen] = useState(true);
    // const [first, setFirst] = 
    const [patinetes, setPatinetes] = useState(true);
    const [barrio, setBarrio] = useState(true);

    useEffect(() => {
        axios.get('https://anthemmanifest.onrender.com/asignacionPatinetes')
            .then((resultado) => {
                setDatas(resultado.data);

                for(const valor of resultado.data){

                distrtitosDuplicados.push(valor.DISTRITO);
                distrtitos = distrtitosDuplicados.filter((item,index)=>{
                    return distrtitosDuplicados.indexOf(item) === index;
                  })
                }
            }, [])
    });

    const handleListItemClick = (event) => () => {
        console.log(event);
        setPatinetes(event);
        setBarrio(event.BARRIO);
    };

    const barrioPorDistrito = (barrio) => {
        if(barrio === true){
           return <h3>Compañías de patinetes disponibles  </h3>
        }
        return <h3>Compañías de patinetes disponibles en {barrio} </h3>
    }

    const sinTotales = (item) => {
        if(item.BARRIO !== "Total"){ 
            return (<ListItemButton
                    key={`${item._id}${item}`}
                    sx={{ py: 0, minHeight: 20, color: 'rgba(255,255,255,.8)' }}
                    onClick={handleListItemClick(item)}
                >
                    <ListItemText 
                        primary={item.BARRIO} 
                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                </ListItemButton>
            )
        }
        
        return <></>
    }

    return datas.length === 0 ? (
        <div style={{ textAlign: "center" }}>
            <Header />
            <h1 style={{paddingTop: "2%", paddingBottom: "3%"}}>Patinetes</h1>
            <h3 style={{color: 'blue'}}>Loading...</h3>
            <br/>
            <Footer /> 
        </div> 
    ):(
        <div style={{ textAlign: "center" }}>
            <Header />
            <h1 style={{paddingTop: "2%", paddingBottom: "2%"}}>Patinetes</h1>
            <Nav component="nav" disablePadding>
                <ThemeProvider
                    theme={createTheme({
                    components: {
                        MuiListItemButton: {
                            defaultProps: {
                                disableTouchRipple: true,
                            },
                        },
                    },
                    palette: {
                        mode: 'dark',
                        primary: { main: 'rgb(102, 157, 246)' },
                        background: { paper: 'rgb(5, 30, 52)' },
                    },
                    })}
                >
                    <Grid container spacing={1} style={{paddingLeft: "2%"}}>
                        <Grid item lg="3"  xs="3">
                            <Paper elevation={0} sx={{ maxWidth: 256 }}>
                                <Box
                                    sx={{
                                    bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                                    pb: open ? 2 : 0,  
                                    }}
                                >
                                    <ListItemButton
                                        alignItems="flex-start"
                                        onClick={() => setOpen(!open)}
                                        sx={{
                                            minWidth: 256,
                                            px: 3,
                                            pt: 2.5,
                                            pb: open ? 0 : 2.5,
                                            '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                                        }}
                                    >
                                        <ListItemText
                                            primary="Barrios"
                                            primaryTypographyProps={{
                                                fontSize: 15,
                                                fontWeight: 'medium',
                                                lineHeight: '20px',
                                                mb: '2px',
                                            }}
                                            sx={{ my: 0 }}
                                        />
                                        <KeyboardArrowDown
                                            sx={{
                                                mr: -1,
                                                opacity: 0,
                                                transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                                                transition: '0.2s',
                                            }}
                                        />
                                    </ListItemButton>
                                    <List
                                        sx={{
                                            width: '100%',
                                            maxWidth: 256,
                                            bgcolor: 'background.paper',
                                            position: 'relative',
                                            overflow: 'auto',
                                            maxHeight: 700,
                                            '& ul': { padding: 0 },
                                        }}
                                        subheader={<li />}
                                    >
                                    {open && distrtitos.map((data) => (
                                        <li key={data._id}>
                                        <ul>
                                            <ListSubheader>{data}</ListSubheader>
                                            {datas.map((item) => {
                                                return sinTotales(item);
                                            })}
                                        </ul>
                                        </li>
                                    ))}
                                    </List>
                                </Box>  
                            </Paper>
                        </Grid>
                        <Grid item lg="9"  xs="9">
                            { barrioPorDistrito(barrio)}
                            <TarjetaPatinete patinete={patinetes}/> 
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Nav>
            <br />
            <Footer />
        </div>
    );
}