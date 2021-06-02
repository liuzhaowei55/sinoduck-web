import React from "react";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./pages/Index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import DrawerOptions from "./layouts/DrawerOptions";

export default function App() {
  const [drawerState, setDrawerState] = useState(false);
  const openDrawer = () => {
    setDrawerState(true);
  };
  const closeDrawer = () => {
    setDrawerState(false);
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerState} onClose={closeDrawer}>
        <DrawerOptions />
      </Drawer>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Box>
  );
}
