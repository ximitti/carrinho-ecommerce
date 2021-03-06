// material ui
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

// react router dom
import { useHistory } from "react-router-dom";

// react
import { useState } from "react";
//----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
//----------------------------------------------------------------------
const MenuBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const sendTo = (path) => {
    handleClose();
    history.push(path);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box
            textAlign="left"
            flexGrow={1}
            fontSize={{ xs: "subtitle1.fontSize", sm: "h5.fontSize" }}
          >
            <Typography variant="inherit">KENZIE SHOP</Typography>
          </Box>
          <Box
            display={{ xs: "block", sm: "none" }}
            minWidth="165px"
            textAlign="right"
          >
            <IconButton>
              <MenuIcon
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleClick}
              />
            </IconButton>
            <Menu
              id="menu"
              keepMounted
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
              <MenuItem onClick={() => sendTo("/cart")}>Carrinho</MenuItem>
            </Menu>
          </Box>
          <Box
            display={{ xs: "none", sm: "flex" }}
            justifyContent="flex-start"
            minWidth="165px"
          >
            <>
              <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
              <MenuItem onClick={() => sendTo("/cart")}>Carrinho</MenuItem>
            </>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuBar;
