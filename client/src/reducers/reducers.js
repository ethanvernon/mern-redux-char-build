import { 
  CHANGEPOINTS,
  CHANGENAME, 
  PUT_CHARACTER_SUCCESS, 
  PUT_CHARACTER_FAILURE, 
  PUT_CHARACTER_STARTED,
  CHANGEHANDLE,
  CHANGEIDENTITY,
  ADDPCONS,
  ADDNCONS,
  ADDGEAR,
  CHANGEGOAL,
  CHANGEREADY,
  CHANGEABLE,
  CHANGEWILLING,
  CHANGEMOTIVATION/*
  GET_CHARACTER_STARTED,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_FAILURE*/ } from '../action-creators/actions';

var defaultState = "";

export const pointsReducer = (state = {points: 12}, action) => {
  switch (action.type) {
    case CHANGEPOINTS:
      var newPoints = {points: action.points}
      return Object.assign({}, state, newPoints);
    default:
      return state;
  }
}

export const nameReducer = (state = {name: ''}, action) => {
  switch (action.type) {
    case CHANGENAME:
      // don't mutate state here
      var newName = {name: action.name};
      return Object.assign({}, state, newName);
    default:
      return state;
  }
};

export const handleReducer = (state = {handle: 'Please choose a handle'}, action) => {
  switch (action.type) {
    case CHANGEHANDLE:
      var newHandle = {handle: action.handle};
      return Object.assign({}, state, newHandle);
    default:
      return state;
  }
}

export const identityReducer = (state = {identity: 'activist'}, action) => {
  switch (action.type) {
    case CHANGEIDENTITY:
      var newIdentity = {identity: action.identity};
      return Object.assign({}, state, newIdentity);
    default:
      return state;
  }
}

export const pConReducer = (state = {pCon: 'angry'}, action) => {
  switch (action.type) {
    case ADDPCONS:
      var newPCon = {pCon: action.pCons};
      return Object.assign({}, state, newPCon);
    default:
      return state;
  }
}

export const nConReducer = (state = {nCon: 'burned out'}, action) => {
  switch (action.type) {
    case ADDNCONS:
      var newNCon = {nCon: action.nCons};
      return Object.assign({}, state, newNCon);
    default:
      return state;
  }
}

export const gearReducer = (state = {gear: 'Asüna Coupé'}, action) => {
  switch (action.type) {
    case ADDGEAR:
      var newGear = {gear: action.gear};
      return Object.assign({}, state, newGear);
    default:
      return state;
  }
}

export const goalReducer = (state = {goal: ''}, action) => {
  switch (action.type) {
    case CHANGEGOAL:
      var newGoal = {goal: action.goal};
      return Object.assign({}, state, newGoal);
    default:
      return state;
  }
}

export const readyReducer = (state = {ready: 1}, action) => {
  switch (action.type) {
    case CHANGEREADY:
      var newReady = {ready: action.ready}
      return Object.assign({}, state, newReady);
    default:
      return state;
  }
}

export const willingReducer = (state = {willing: 1}, action) => {
  switch (action.type) {
    case CHANGEWILLING:
      var newWilling = {willing: action.willing};
      return Object.assign({}, state, newWilling);
    default:
      return state;
  }
}

export const ableReducer = (state = {able: 1}, action) => {
  switch (action.type) {
    case CHANGEABLE:
      var newAble = {able: action.able};
      return Object.assign({}, state, newAble);
    default:
      return state;
  }
}

export const motivationReducer = (state = {motivation: 'Envy'}, action) => {
  switch (action.type) {
    case CHANGEMOTIVATION:
      var newMotivation = {motivation: action.motivation};
      return Object.assign({}, state, newMotivation);
    default:
      return state;
  }
}

export const putCharacterReducer = (state = {saving: false, character: [], error: null}, action) => {
  switch (action.type) {
    case PUT_CHARACTER_STARTED:
      return {
        ...state,
        saving: true
      };
    case PUT_CHARACTER_SUCCESS:
      return {
        ...state,
        saving: false,
        error: null,
        character: [...state.character, action.payload]
      };
    case PUT_CHARACTER_FAILURE:
      return {
        ...state,
        saving: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
/*
export const getCharacterReducer = (state = {loading: false, character: [{passkey:''}], error: null}, action) => {
  switch (action.type) {
    case GET_CHARACTER_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        character: [...state.character, action.payload]
      };
    case GET_CHARACTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
*/