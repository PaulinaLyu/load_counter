import axios from "axios";
import {
  GET_LOADABLE_FRAMEWORKS_URL,
  GET_LOADS_URL,
  GET_VULNERALBILITIES_URL,
  POST_MAKE_LOAD_URL,
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

export interface getVulnerabilitiesDataResp {
  framework_name: string;
  framework_version: string;
  framework_lang: string;
  vulnerability: string;
  source_url: string;
  is_actual: boolean;
}
export interface getLoadsDataResp {
  framework_name: string;
  framework_version: string;
  framework_lang: string;
  status: string;
  type: string;
  url: string;
  description: string;
}

export const getVulnerabilitiesData = () => axios.get(`${GET_VULNERALBILITIES_URL}`);
export const getLoadsData = () => axios.get(`${GET_LOADS_URL}`);
export const getLoadableFrameworks = () => axios.get(`${GET_LOADABLE_FRAMEWORKS_URL}`);
export const postMakeLoad = (body: postMakeLoadBodyType) =>
  axios.post(`${POST_MAKE_LOAD_URL}`, body);
