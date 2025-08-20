import axios from "axios";

const getBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;

  if (envUrl !== "auto") {
    return envUrl;
  }

  const host = window.location.hostname;

  if (/^192\.168\./.test(host)) {
    return "https://back.vodokanal.okeit.edu";
  }
  return "https://back-vodokanal.oksei.ru";
};

export const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
