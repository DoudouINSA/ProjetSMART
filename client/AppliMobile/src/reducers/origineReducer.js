const origineReducer = (state = { lat: 0, lng: 0, commune: '', route: '', formatedAdress: '' }, action) => {
  switch (action.type) {
    case 'UPDATE_ORIGINE':
      return {
        lat: action.lat,
        lng: action.lng,
        commune: action.commune,
        route: action.route,
        formatedAdress: action.formatedAdress
      };
    default:
      return state;
  }
};

export default origineReducer;
