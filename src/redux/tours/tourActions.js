export const setTours = (tours) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_TOUR',
      tours
    });
  };
};
