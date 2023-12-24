const initialState = [];

const contador = (previousState = initialState, action) => {
    switch (action.type) {
      case "ADD":
        return action.text;
      default:
        return previousState;
    }
};
  
export default contador;