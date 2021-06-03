import { Box, Button, Grid, TextField } from "@material-ui/core";
import React, { BaseSyntheticEvent, SyntheticEvent, useState } from "react";
import validator from "validator";

const rules = {
  username: { min: 3, max: 16 },
};

export default function AuthLogin() {
  const [loginForm, setLoginForm] = useState({
    username: { value: "", error: false, helperText: "" },
    password: { value: "", error: false, helperText: "" },
  });
  const onLoginFormUsernameChange = (event: any) => {
    console.log(event.target.value);
    if (!validator.isByteLength(event.target.value, { min: 3, max: 16 })) {
      setLoginForm({ ...loginForm, username: { value: "", error: true, helperText: "用户名长度在 3 到 16 位之间" } });
    } else {
      setLoginForm({ ...loginForm, username: { value: event.target.value, error: false, helperText: "" } });
    }
  };
  const onLoginFormPasswordChange = (event: any) => {
    if (!validator.isByteLength(event.target.value, { min: 6 })) {
      setLoginForm({ ...loginForm, password: { value: "", error: true, helperText: "密码长度至少为 6 位" } });
    } else {
      setLoginForm({ ...loginForm, password: { value: event.target.value, error: false, helperText: "" } });
    }
  };
  const onClickLoginButton = (event: any) => {
    event.preventDefault();
    try {
      Object.entries(loginForm).forEach(([key, value]) => {
        console.log(key);
        console.log(value);
        if (value.error) {
          throw new Error();
        }
      });
    } catch (error) {
      return;
    }
    console.log("aaa");
  };
  return (
    <Box mt={10}>
      <form onSubmit={onClickLoginButton}>
        <TextField
          id="username"
          label="用户名"
          onChange={onLoginFormUsernameChange}
          error={loginForm.username.error}
          helperText={loginForm.username.helperText}
          fullWidth
          required
        />
        <Box mt={2} />
        <TextField
          id="password"
          type="password"
          label="密码"
          onChange={onLoginFormPasswordChange}
          error={loginForm.password.error}
          helperText={loginForm.password.helperText}
          fullWidth
          required
        />
        <Box mt={2} />
        <Grid container direction="row" justifyContent="center">
          <Button variant="contained" color="primary" type="submit">
            登录
          </Button>
        </Grid>
      </form>
    </Box>
  );
}
