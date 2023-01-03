export const initialState = {
  usersNumber: "30",
  usersGender: "",
  usersNationality: "",
};

const usersInfoReducer = (state, action) => {
  switch (action.type) {
    case "updateSearchingSettings":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "initial":
      return initialState;
    default:
      throw new Error();
  }
};
export default usersInfoReducer;
