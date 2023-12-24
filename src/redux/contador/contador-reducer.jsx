const initialState = 0;

const contador = (previousState = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        console.log(previousState);
        return previousState + 1;
        case "RESET":
          console.log(previousState, initialState);
          return initialState;
      default:
        return previousState;
    }
};
  
export default contador;