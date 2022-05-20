const setPoints = (dispatch, points) => {
   dispatch({
      type: "SET_POINTS",
      payload: {
         points,
      },
   });
};

export { setPoints };
