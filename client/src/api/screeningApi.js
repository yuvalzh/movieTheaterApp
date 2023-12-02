import axios from "axios";
import { serverUrl } from "../api/consts.js";

export const getScreenings = async () => {
  try {
    const response = await axios.get(`${serverUrl}/screenings/all`);
    const screeningRes = response.data;
    return screeningRes;
  } catch (err) {
    console.log(err);
  }
};

export const getScreeningById = async (id) => {
  try {
    const response = await axios.get(`${serverUrl}/screenings`, {
      params: { id },
    });
    const screeningsRes = response.data;
    return screeningsRes;
  } catch (err) {
    console.log(err);
  }
};

export const createScreenings = async (screenings) => {
  try {
    const response = await axios.post(`${serverUrl}/screenings`, screenings);
    console.log("Response:", response.data);
    const screeningsRes = response.data;
    return screeningsRes;
  } catch (error) {
    console.log(error);
  }
};

export const deleteScreenings = async (id) => {
  try {
    const response = await axios.delete(`${serverUrl}/screenings`, {
      params: { id },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
