import * as React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import {Button} from 'reactstrap';
import LongMenu from './menu'

export default function header() {
	return (
		<AppBar color='success'>
			<Toolbar>
				<LongMenu/>
				<Button href='/Accidentes' color="inherit" className='text-light'>Accidentes</Button>
        		<Button href='/Bicicletas' color="inherit" className='text-light'>Bicicletas</Button>
        		<Button href='/Patinetes' color="inherit" className='text-light'>Patinetes</Button>
			</Toolbar>
		</AppBar>
	);
}