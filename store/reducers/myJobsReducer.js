import { ADD_JOB } from "../actions/addJob";

const myJobsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_JOB:
      const newArr = [...state, action.payload];
      const element = newArr.filter((item) => item.id == action.payload.id);
      if (element.length > 1) {
        return state;
      } else {
        return newArr;
      }
    default:
      return state;
  }
};

export default myJobsReducer;
