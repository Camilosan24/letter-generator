import { useState } from "react";
import { Simple, Birthday, Wedding } from "../Objects/Letter";
import { addSimple, addBirthday, addWedding } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import LetterContainer from "../components/Home/LetterContainer";

const Home = () => {
	//-------VARIABLES-------------

	const [id, setId] = useState(1);
	const dispatch = useDispatch();
	const letters = useSelector((state) => state.letters);

	//-------FUNCIONES-------------

	const handleAddLetter = (e, title, content) => {
		let objectToAdd = null;
		switch (e.target.name) {
			case "simple":
				objectToAdd = addSimple(new Simple(id, title, content));
				break;
			case "cumpleaños":
				objectToAdd = addBirthday(
					new Birthday(
						id,
						title,
						content,
						"https://ecumple.com/wp-content/uploads/2020/06/cumpleanos-paises.jpg"
					)
				);
				break;
			case "boda":
				objectToAdd = addWedding(
					new Wedding(
						id,
						title,
						content,
						"https://img2.rtve.es/i/?w=1600&i=1604485368207.jpg"
					)
				);
				break;

			default:
				break;
		}
		setId(id + 1);
		dispatch(objectToAdd);
	};

	return (
		<section className="main-container">
			<LetterContainer
				containerName="simple"
				lettersObject={letters.simple}
				handleAddLetter={handleAddLetter}
			/>
			<LetterContainer
				containerName="birthday"
				lettersObject={letters.birthday}
				handleAddLetter={handleAddLetter}
			/>
			<LetterContainer
				containerName="wedding"
				lettersObject={letters.wedding}
				handleAddLetter={handleAddLetter}
			/>
		</section>
	);
};

export default Home;
