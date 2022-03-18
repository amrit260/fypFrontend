const initialState = [];

const tourReducer = (previousStateOfTour = initialState, action) => {
  switch (action.type) {
    case 'SET_TOUR':
      return [  ...action.tours ]; // ...action.payload = list of tours [x,x,x] action.payload = tours:[x,x,x]
    default:
      return previousStateOfTour;
  }
};

export default tourReducer;
