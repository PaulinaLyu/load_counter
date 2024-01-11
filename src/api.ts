import axios from "axios";
import {
  GET_LOADABLE_FRAMEWORKS_URL,
  GET_LOADS_URL,
  GET_VULNERALBILITIES_URL,
  POST_MAKE_LOAD_URL,
  MAIN_URL,
} from "./consts";

export const getVulnerabilitiesData = () => axios.get(`${MAIN_URL}${GET_VULNERALBILITIES_URL}`);
export const getLoadsData = () => axios.get(`${MAIN_URL}${GET_LOADS_URL}`);
export const getLoadableFrameworks = () => axios.get(`${MAIN_URL}${GET_LOADABLE_FRAMEWORKS_URL}`);
export const postMakeLoad = () => axios.get(`${MAIN_URL}${POST_MAKE_LOAD_URL}`);
