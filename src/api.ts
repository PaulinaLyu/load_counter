import axios from "axios";
import {
  GET_LOADABLE_FRAMEWORKS_URL,
  GET_LOADS_URL,
  GET_VULNERALBILITIES_URL,
  POST_MAKE_LOAD_URL,
  MAIN_URL,
} from "./consts";

interface postMakeLoadBodyType {
  framework_name: string;
  framework_lang: string;
  framework_version: string;
  load_name: string;
  load_from: number;
  load_to: number;
  load_duration: number;
  load_step: number;
  load_request_type: string;
}

export const getVulnerabilitiesData = () => axios.get(`${MAIN_URL}${GET_VULNERALBILITIES_URL}`);
export const getLoadsData = () => axios.get(`${MAIN_URL}${GET_LOADS_URL}`);
export const getLoadableFrameworks = () => axios.get(`${MAIN_URL}${GET_LOADABLE_FRAMEWORKS_URL}`);
export const postMakeLoad = (body: postMakeLoadBodyType) =>
  axios.post(`${MAIN_URL}${POST_MAKE_LOAD_URL}`, body);
