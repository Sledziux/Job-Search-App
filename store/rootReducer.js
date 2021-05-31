import { combineReducers } from "redux";
import jobsReducer from "./reducers/jobsReducer";
import myJobsReducer from "./reducers/myJobsReducer";
export default combineReducers({
  jobsReducer,
  myJobsReducer,
});
