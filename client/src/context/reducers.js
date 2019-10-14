const initialState = {
  techList: ['TypeScript', 'React Hooks'],
};

const types = {
  SET_TECH_LIST: 'SET_TECH_LIST',
  ADD_TO_TECH_LIST: 'ADD_TO_TECH_LIST',
  REMOVE_FROM_TECH_LIST: 'REMOVE_FROM_TECH_LIST',
};

const reducer = (state = initialState, action) => {
  console.log({oldState: state, type: action.type, payload: action.payload});
  switch (action.type) {
    case types.SET_TECH_LIST:
      return {
        ...state,
        techList: action.payload,
      };
    case types.ADD_TO_TECH_LIST:
      return {
        ...state,
        techList: [...state.techList, action.payload],
      };
    case types.REMOVE_FROM_TECH_LIST:
      return {
        ...state,
        techList: state.techList.filter(tech => tech !== action.payload),
      };
    default:
      throw new Error('Unexpected action');
  }
};
export {initialState, types, reducer};
