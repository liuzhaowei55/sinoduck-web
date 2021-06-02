import RequestClient from "../utils/RequestClient";

export function login(data: AuthLoginData) {
  return RequestClient.post("/auth/login", data);
}

export function register(data: AuthRegisterData) {
  return RequestClient.post("/auth/register", data);
}

export function logout() {
  return RequestClient.get("/auth/logout");
}

interface AuthLoginData {
  username: string;
  password: string;
}

interface AuthRegisterData {
  username: string;
  password: string;
  passwordConfirmation: string;
}
