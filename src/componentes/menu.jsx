import * as React from 'react';
import {IconButton, Menu, MenuItem} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const options = [
  'Perfil',
  'Información',
  'Ayuda',
  'Idioma',
  'Acerca de',
  'Log out'
];

const ITEM_HEIGHT = 30;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const navigate = useNavigate();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMove = event => {
    navigate("/"+event.nativeEvent.target.outerText);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        color="inherit"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Perfil'} onClick={handleMove}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}