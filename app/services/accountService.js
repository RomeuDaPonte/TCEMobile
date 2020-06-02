import jwtDecode from "jwt-decode";
import { AsyncStorage } from "react-native";

import http from "./httpService";
import { apiUrl } from "../../config";

const apiEndPont = apiUrl + "/account";
const tokenKey = "token";

//http.setJwt(getJwt()); // set jwt in headers
getJwt()
  .then((jwt) => http.setJwt(jwt))
  .catch((err) => console.log(err));

export function login(email, password) {
  return new Promise((resolve, reject) => {
    http
      .post(apiEndPont + "/login", { email, password })
      .then((res) => {
        console.log("then ?");
        saveJwtLocaly(res.data).catch((err) => reject({ err }));
        resolve(jwtDecode(res.data));
      })
      .catch((err) => reject(err));
  });
}

export async function getJwt() {
  return await AsyncStorage.getItem(tokenKey);
}

async function saveJwtLocaly(jwt) {
  return await AsyncStorage.setItem(tokenKey, jwt);
}

export async function logout() {
  await AsyncStorage.removeItem(tokenKey);
}

export async function getCurrentUser() {
  try {
    const jwt = await AsyncStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export async function updateUser(userId, user) {
  const body = { ...user };
  delete body.passwordConfirmation;
  return await http.put(apiEndPont + "/" + userId, body);
}
