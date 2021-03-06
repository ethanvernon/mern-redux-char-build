import { combineReducers } from 'redux';
import { pointsReducer,
	nameReducer,
	handleReducer,
	identityReducer,
	pConReducer,
	nConReducer,
	gearReducer,
	goalReducer,
	readyReducer,
	willingReducer,
	ableReducer,
	motivationReducer,
	putCharacterReducer } from './reducers';

/**
 * Usually when exporting combineReducers you give a key for each reducer,
 * followed by the reducer associated with it.
 */
export const rootReducer = combineReducers({
	points: pointsReducer,
	name: nameReducer,
	handle: handleReducer,
	identity: identityReducer,
	pCon: pConReducer,
	nCon: nConReducer,
	gear: gearReducer,
	goal: goalReducer,
	ready: readyReducer,
	willing: willingReducer,
	able: ableReducer,
	motivation: motivationReducer,
	saveCharacter: putCharacterReducer
});
