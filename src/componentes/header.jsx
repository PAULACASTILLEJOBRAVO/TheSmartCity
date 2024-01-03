import * as React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import {Home, Notifications} from '@mui/icons-material/';
import {Button} from 'reactstrap';
import {IconButton, Box, Menu, MenuItem, Typography, Tooltip, Badge, Alert, Snackbar, Avatar} from '@mui/material';
import { styled } from '@mui/material/styles';
import PopupState, { bindHover, bindFocus, bindMenu} from 'material-ui-popup-state';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import { useNavigate } from 'react-router-dom';
import LongMenu from './menu';
import store from '../redux/store';
import { reset } from "../redux/contador/contador-acciones";

const settings = ['Profile', 'Account', 'Home', 'Logout'];

function stringToColor(string) {
	let hash = 4;
	let i;
  
	for (i = 0; i < string.length; i += 1) {
	  hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}
  
	let color = '#';
  
	for (i = 0; i < 3; i += 1) {
	  const value = (hash >> (i * 8)) & 0xff;
	  color += `00${value.toString(16)}`.slice(-2);
	}
  
	return color;
  }
  
  function stringAvatar(name) {
	return {
	  sx: {
		bgcolor: stringToColor(name),
	  },
	  children: `${name.split('@')[0][0]}`,
	};
  }
  

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
	  backgroundColor: '#44b700',
	  color: '#44b700',
	  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
	  '&::after': {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		borderRadius: '50%',
		animation: 'ripple 1.2s infinite ease-in-out',
		border: '1px solid currentColor',
		content: '""',
	  },
	},
	'@keyframes ripple': {
	  '0%': {
		transform: 'scale(.8)',
		opacity: 1,
	  },
	  '100%': {
		transform: 'scale(2.4)',
		opacity: 0,
	  },
	},
}));

export default function Header() {
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [state, setState] = React.useState({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	  });
	const { vertical, horizontal, open } = state;
	
	const navigate = useNavigate();
	
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleMove = event => {
		if(event.nativeEvent.target.outerText === "Home"){
			navigate("/");
		}else if(event.nativeEvent.target.outerText === "Logout"){
			onLogout();
		}else{
			navigate("/"+event.nativeEvent.target.outerText);
		}
	};

	const handleOpenNotification = (newState) => () => {
		store.dispatch(reset());
		setState({ ...newState, open: true });
	}
	
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
	
		setState({ ...state, open: false });
	};

	const onLogout = () => {
		sessionStorage.clear();
		navigate("/");
	}

	React.useEffect(() => {
		console.log(store.getState().informacion);
		console.log(sessionStorage.getItem('email'));
	}, [store]);
		
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
						onClick={handleOpenNotification({ vertical: 'top', horizontal: 'center' })}
					>
						<Badge badgeContent={store.getState().contador}  color="error">
							<Notifications />
						</Badge>
					</IconButton>
					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
						<Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
							{store.getState().informacion}
						</Alert>
					</Snackbar>
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
							<StyledBadge
  								overlap="circular"
  								anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  								variant="dot"
							>
								<Avatar {...stringAvatar(sessionStorage.getItem('email'))} />
							</StyledBadge>
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
				<button class="btn btn-dark" onClick={onLogout} >Logout</button>
			</Toolbar>
		</AppBar>
	);
}