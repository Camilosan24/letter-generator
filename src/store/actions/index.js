export const addSimple = (letter) => ({
	type: "ADD_SIMPLE_LETTER",
	payload: letter,
});

export const addBirthday = (letter) => ({
	type: "ADD_BIRTHDAY_LETTER",
	payload: letter,
});

export const addWedding = (letter) => ({
	type: "ADD_WEDDING_LETTER",
	payload: letter,
});

export const deleteLetterFromStore = (newLetters) => ({
	type: "DELETE_LETTER",
	payload: newLetters,
});
