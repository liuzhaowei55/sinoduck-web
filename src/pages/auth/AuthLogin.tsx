import { Box, Button, Grid, TextField } from "@material-ui/core";
import React from "react";

export default function AuthLogin() {
  return (
    <Box mt={10}>
      <form>
        <TextField id="username" label="用户名" fullWidth required />
        <Box mt={2} />
        <TextField
          id="password"
          type="password"
          label="密码"
          fullWidth
          required
        />
        <Box mt={2} />
        <Grid container direction="row" justifyContent="center">
          <Button variant="contained" color="primary">
            登录
          </Button>
        </Grid>
      </form>
    </Box>
  );
}
