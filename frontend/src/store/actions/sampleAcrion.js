import axios from "../../api/axios";
import {
  sampleRequest,
  sampleSuccess,
  sampleFail,
} from "../slices/sampleReducer";
export const getsample = async (dispatch) => {
  try {
    dispatch(sampleRequest());
    const { data } = await axios.get("/api/v1/sample");
    dispatch(sampleSuccess(data));
  } catch (error) {
    dispatch(sampleFail("cant get"));
  }
};