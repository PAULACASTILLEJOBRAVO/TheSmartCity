import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header';
import Footer from '../footer';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import {Paper, List, ListItem, ListItemText, ListSubheader, ListItemButton, Grid, Divider } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import TarjetaPatinete from './TarjetaPatinete';

const Nav = styled(List)({
    '& .MuiListItemButton-root': {
      paddingLeft: 24,
      paddingRight: 24,
    }
  });

export default function Test() {
    const [datas, setDatas] = useState([]);
    const [open, setOpen] = useState(true);
    const [patinetes, setPatinetes] = useState(true);

    useEffect(() => {
        axios.get('https://anthemmanifest.onrender.com/asignacionPatinetes')
            .then((resultado) => {
                setDatas(resultado.data);
            }, [])
    });

    const handleListItemClick = (event) => () => {
        console.log(event);
        setPatinetes(event);
    };
    

    return datas.length === 0 ? (
        <div style={{ textAlign: "center" }}>
            <Header />
            <br/>
            <br/>
            <br/>
            <h1>Patinetes</h1>
            <LinearProgress/>
            <br/>
            <Footer /> 
        </div> 
    ):(
        <div style={{ textAlign: "center" }}>
            <Header />
            <br />
            <br />
            <br />
            <h1>Patinetes</h1>
            <br/>
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
                        <Grid container spacing={2}>
                        <Grid xs={{maxWidth: 256}}>
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
                                    {/* {open && datas.map((data) => (
                                            
                                    ))} */}

                                    <List
                                        sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                        position: 'relative',
                                        overflow: 'auto',
                                        maxHeight: 300,
                                        '& ul': { padding: 0 },
                                    }}
                                    subheader={<li />}
                                    >
                                    {open && datas.map((data) => (
                                        <li key={data._id}>
                                        <ul>
                                            <ListSubheader>{data.DISTRITO}</ListSubheader>
                                            {datas.map((item) => (
                                            // <ListItem key={`${item._id}${item}`}>
                                            //     <ListItemText primary={item.BARRIO} />
                                            // </ListItem>
                                            <ListItemButton
                                                key={`${item._id}${item}`}
                                                sx={{ py: 0, minHeight: 20, color: 'rgba(255,255,255,.8)' }}
                                                onClick={handleListItemClick(item)}
                                            >
                                                <ListItemText
                                                primary={item.BARRIO}
                                                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                                />
                                            </ListItemButton>
                                            ))}
                                        </ul>
                                        </li>
                                    ))}
                                    </List>
 
 
                                </Box>  
                            </Paper>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid sx >
                             {/* <TarjetaPatinete patinete={patinetes}/>  */}
                        </Grid>
                        </Grid>
                    </ThemeProvider>
                </Nav>
            <br />
            <Footer />
        </div>
    );
}