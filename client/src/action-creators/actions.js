import axios from "axios";

export const CHANGENAME = 'CHANGENAME';
export const CHANGEHANDLE = 'CHANGEHANDLE';
export const CHANGEIDENTITY = 'CHANGEIDENTITY';
export const ADDPCONS = 'ADDPCONS';
export const ADDNCONS = 'ADDNCONS';
export const ADDGEAR = 'ADDGEAR';
export const CHANGEGOAL = 'CHANGEGOAL';
export const CHANGEREADY = 'CHANGEREADY';
export const CHANGEABLE = 'CHANGEABLE';
export const CHANGEWILLING = 'CHANGEWILLING';
export const CHANGEMOTIVATION = 'CHANGEMOTIVATION';
export const CHANGEPOINTS = 'CHANGEPOINTS';
export const PUT_CHARACTER_SUCCESS = 'PUT_CHARACTER_SUCCESS';
export const PUT_CHARACTER_FAILURE = 'PUT_CHARACTER_FAILURE';
export const PUT_CHARACTER_STARTED = 'PUT_CHARACTER_STARTED';
/*export const GET_CHARACTER_SUCCESS = 'GET_CHARACTER_SUCCESS';
export const GET_CHARACTER_FAILURE = 'GET_CHARACTER_FAILURE';
export const GET_CHARACTER_STARTED = 'GET_CHARACTER_STARTED';*/

export const changePoints = (points) => {
	return {
		type: CHANGEPOINTS,
		points: points
	}
}

export const changeName = (name) => {
	return {
		type: CHANGENAME,
		name: name
	}
}

export const changeHandle = (handle) => {
	return {
		type: CHANGEHANDLE,
		handle: handle
	}
}

export const changeIdentity = (identity) => {
	return {
		type: CHANGEIDENTITY,
		identity: identity
	}
}

export const addPCons = (pCons) => {
	return {
		type: ADDPCONS,
		pCons: pCons
	}
}

export const addNCons = (nCons) => {
	return {
		type: ADDNCONS,
		nCons: nCons
	}
}

export const addGear = (gear) => {
	return {
		type: ADDGEAR,
		gear: gear
	}
}

export const changeGoal = (goal) => {
	return {
		type: CHANGEGOAL,
		goal: goal
	}
}

export const changeReady = (ready) => {
	return {
		type: CHANGEREADY,
		ready: ready
	}
}

export const changeWilling = (willing) => {
	return {
		type: CHANGEWILLING,
		willing: willing
	}
}

export const changeAble = (able) => {
	return {
		type: CHANGEABLE,
		able: able
	}
}

export const changeMotivation = (motivation) => {
	return {
		type: CHANGEMOTIVATION,
		motivation: motivation
	}
}

//tutorial from https://alligator.io/redux/redux-thunk/
export const putCharacter = (character) => {
	return dispatch => {

		//first dispatch an immediate synchronous action to the store to indicate that we’ve started saving 
		dispatch(putCharacterStarted());

		return axios.post("/api/new-char", {
				character
		})
		.then(res => {
			dispatch(putCharacterSucess(res.data));
			//dispatch(changePasskey(res.data.passkey));
		})
		.catch(err => {
			console.log('error caught');
			dispatch(putCharacterFailure(err.response.data.message));
		});
	};
};

const putCharacterStarted = () => ({
	type: PUT_CHARACTER_STARTED
});

const putCharacterSucess = character => ({
	type: PUT_CHARACTER_SUCCESS,
	payload: {
		...character
	}
});

const putCharacterFailure = error => ({
	type: PUT_CHARACTER_FAILURE,
	payload: {
		error
	}
});

/*
export const getCharacter = (passkey) => {
	return dispatch => {

		//first dispatch an immediate synchronous action to the store to indicate that we’ve started loading 
		dispatch(getCharacterStarted());

		//builds query from user input on home page
		var getQuery='/api/get-file/?passkey=' + passkey;

		axios.get(getQuery)
		.then(res => {
			dispatch(getCharacterSucess(res.data));
			console.log(res.data[0].character);
			dispatch(changeCharacter(res.data[0].character));
		})
		.catch(err => {
			dispatch(getCharacterFailure(err.message));
		});
	};
};

const getCharacterStarted = () => ({
	type: GET_CHARACTER_STARTED
});

const getCharacterSucess = character => ({
	type: GET_CHARACTER_SUCCESS,
	payload: {
		...character
	}
});

const getCharacterFailure = error => ({
	type: GET_CHARACTER_FAILURE,
	payload: {
		error
	}
});
*/