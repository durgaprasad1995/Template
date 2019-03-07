// import axios from "axios";
export function addEmployee(student) {
  console.log("sudents", student);
  return function(dispatch) {
    dispatch({ type: "ADD_EMPLOYEE", payload: student });
  };
}
