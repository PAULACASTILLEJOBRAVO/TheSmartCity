import * as React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import {Home, AccountCircle, Notifications} from '@mui/icons-material/';
import {Button} from 'reactstrap';
import {IconButton, Box, Menu, MenuItem, Typography, Tooltip, Badge} from '@mui/material';
import PopupState, { bindHover, bindFocus, bindMenu} from 'material-ui-popup-state';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import { useNavigate } from 'react-router-dom';
import LongMenu from './menu';
import store from '../redux/store';
import { reset } from "../redux/contador/contador-acciones";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const navigate = useNavigate();
	
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleMove = event => {
		navigate("/"+event.nativeEvent.target.outerText);
	};

	const handleOpenNotification = () => {
		store.dispatch(reset());
	}

	return (
		<AppBar color='success' position='static'>

				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'flex' } }}>
						<LongMenu/>
						<Button href='/Accidentes' color="inherit" className='text-light' style={{ paddingRight: "4%", paddingLeft: "2%"}}>Accidentes</Button>
						<PopupState variant="popover" popupId="demo-popup-menu" >
							{(popupState) => (
								<React.Fragment>
								<Button variant="contained" {...bindHover(popupState)} {...bindFocus(popupState)} color="inherit" className='text-light' style={{ paddingRight: "4%"}}>
									Bicicletas
								</Button>
								<HoverMenu {...bindMenu(popupState)} >
									<MenuItem onClick={handleMove}>Aforo</MenuItem>
									<MenuItem onClick={handleMove}>Disponibilidad</MenuItem>
								</HoverMenu>
								</React.Fragment>
							)}
						</PopupState>
						<Button href='/Patinetes' color="inherit" className='text-light' style={{ paddingRight: "4%"}}>Patinetes</Button>
					</Box>
					<Box sx={{ flexGrow: 0 }} style={{paddingRight: "2%"}}>
					<IconButton
						size="large"
						aria-label="show new notifications"
						color="inherit"
						onClick={handleOpenNotification}
					>
						<Badge badgeContent={store.getState().contador}  color="error">
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
							<MenuItem key={setting} onClick={handleMove}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
						</Menu>
					</Box>
				</Toolbar>
		</AppBar>
	);
}