const INITIAL_STATE = {
  user: {},
  isSigned: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log("A => ", action);
  switch (action.type) {
    case "SETUSER":
      state.user.length = 0;

      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case "SIGNEDUP":
      return {
        isSigned: action.payload,
      };
    case "SIGNEDOUT":
      return {
        ...state,
        user: [],
      };
    default:
      return state;
  }
};
