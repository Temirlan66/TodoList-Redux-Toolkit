export const authActionTpyesv = {
    LOG_IN: "LOG_IN",
    LOG_OUT: "LOG_OUT",
  };
  
  const initialState = {
    email: "",
    isAuthrized: false,
  };
  
  export const authRudecer = (state = initialState, action) => {
    switch (action.type) {
      case authActionTpyesv.LOG_IN:
        return {
          ...state,
          email: action.payload,
          isAuthrized: true,
        };
  
      case authActionTpyesv.LOG_OUT:
        return initialState;
  
      default:
        return state;
    }
  };