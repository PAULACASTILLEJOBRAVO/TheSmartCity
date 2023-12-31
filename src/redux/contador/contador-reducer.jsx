const initialState = 0;

const contador = (previousState = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return previousState + 1;
        case "RESET":
          return initialState;
      default:
        return previousState;
    }
};
  
export default contador;