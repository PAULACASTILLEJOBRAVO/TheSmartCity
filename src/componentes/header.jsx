import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
	return (
		<AppBar color='success'>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
                <Typography variant="h6"
					component="div" sx={{ flexGrow: 1 }}>
					The Smart City
				</Typography>
				</IconButton>
				
				<Button href='/Accidentes' color="inherit">Accidentes</Button>
        		<Button href='/Bicicletas' color="inherit">Bicicletas</Button>
			</Toolbar>
		</AppBar>
	);
}