import Axios from "axios";

import { API_URL } from "./API_URL";

const GetList = (e) => {
  return Axios.get(`${API_URL}/${e}`);
};

const GetDetail = (e, id) => {
  return Axios.get(`${API_URL}/${e}/${id}`);
};

const Create = (e, data) => {
  return Axios.post(`${API_URL}/${e}`, data);
};

const Update = async (e, id, data) => {
  return await Axios.put(`${API_URL}/${e}/${id}`, data);
};

const Delete = (e, id) => {
  return Axios.delete(`${API_URL}/${e}/${id}`);
};

const AppService = {
  GetList,
  GetDetail,
  Create,
  Update,
  Delete,
};

export default AppService;
