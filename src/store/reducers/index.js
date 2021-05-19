const initialState = {
	letters: {
		simple: [],
		birthday: [],
		wedding: [],
	},
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_SIMPLE_LETTER":
			return {
				letters: {
					...state.letters,
					simple: [...state.letters.simple, action.payload],
				},
			};
		case "ADD_BIRTHDAY_LETTER":
			return {
				letters: {
					...state.letters,
					birthday: [...state.letters.birthday, action.payload],
				},
			};
		case "ADD_WEDDING_LETTER":
			return {
				letters: {
					...state.letters,
					wedding: [...state.letters.wedding, action.payload],
				},
			};

		case "DELETE_LETTER":
			return {
				letters: {
					...state.letters,
					[action.payload.name]: action.payload.newLetters,
				},
			};

		default:
			return state;
	}
};

export default reducers;
