export default function reducer(
  state = {
    AddEmployee: null,
    error: null
  },
  action
) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        fetching: true,
        fetched: false,
        AddEmployee: "Add EMmployeeee",
        error: null
      };
  }
  return state;
}
