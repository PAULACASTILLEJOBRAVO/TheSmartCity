import * as React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import {Home, AccountCircle, Notifications} from '@mui/icons-material/';
import {Button} from 'reactstrap';
import {IconButton, Container, Box, Menu, MenuItem, Typography, Tooltip, Badge} from '@mui/material';
import LongMenu from './menu'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [notification, setNotification] = React.useState(0);
	
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar color='success' position='static'>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<LongMenu/>
						<Button href='/Accidentes' color="inherit" className='text-light'>Accidentes</Button>
						<Button href='/Bicicletas' color="inherit" className='text-light'>Bicicletas</Button>
						<Button href='/Patinetes' color="inherit" className='text-light'>Patinetes</Button>
					</Box>
					<Box sx={{ flexGrow: 0 }}>
					<IconButton
						size="large"
						aria-label="show new notifications"
						color="inherit"
					>
						<Badge badgeContent={notification} showZero color="error">
							<Notifications />
						</Badge>
					</IconButton>

						<IconButton
							aria-label="more"
							id="long-button"
							color="inherit"
							aria-haspopup="true"
							href='/'
						>
							<Home />
						</IconButton> 				

						<Tooltip title="Open settings">
							<IconButton 
								aria-label="more"
								id="long-button"
								color="inherit"
								aria-haspopup="true"
								onClick={handleOpenUserMenu} 
								sx={{ p: 0 }}
							>
								<AccountCircle/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={handleCloseUserMenu}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}