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
			console.log(action.payload);
			switch (action.payload.name) {
				case "simple":
					return {
						letters: {
							...state.letters,
							simple: action.payload.newLetters,
						},
					};
				case "birthday":
					return {
						letters: {
							...state.letters,
							birthday: action.payload.newLetters,
						},
					};
				case "wedding":
					return {
						letters: {
							...state.letters,
							wedding: action.payload.newLetters,
						},
					};

				default:
					break;
			}
		default:
			return state;
	}
};

export default reducers;
