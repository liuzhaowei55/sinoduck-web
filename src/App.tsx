import React, { useState } from "react";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Index from "./pages/Index";
import DrawerOptions from "./layouts/DrawerOptions";
import AuthLogin from "./pages/auth/AuthLogin";

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
          <Button color="inherit" component={RouterLink} to="/login">
            登录
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerState} onClose={closeDrawer}>
        <DrawerOptions />
      </Drawer>
      <Switch>
        <Route exact path="/login" component={AuthLogin} />
        <Route exact path="/" component={Index} />
      </Switch>
    </Box>
  );
}
