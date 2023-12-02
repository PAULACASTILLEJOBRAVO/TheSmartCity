import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LongMenu from './menu'

export default function header() {
	return (
		<AppBar color='success'>
			<Toolbar>
				<LongMenu/>
				<Button href='/Accidentes' color="inherit">Accidentes</Button>
        		<Button href='/Bicicletas' color="inherit">Bicicletas</Button>
        		<Button href='/Patinetes' color="inherit">Patinetes</Button>
			</Toolbar>
		</AppBar>
	);
}