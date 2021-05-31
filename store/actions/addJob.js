export const ADD_JOB = "ADD_JOB";

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
export default addJob;
