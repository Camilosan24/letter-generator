import Card from "../Home/Card";
import NoCards from "../Home/NoCards";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteLetterFromStore } from "../../store/actions";

const LetterContainer = ({ containerName, lettersObject, handleAddLetter }) => {
	const letters = useSelector((state) => state.letters);
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [readyToSend, setReadyToSend] = useState(false);
	const [buttonText, setButtonText] = useState("Agregar");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const handleAnimation = () => {
		setShow(!show);
	};

	const handleOnClick = (e) => {
		handleAnimation();
		if (readyToSend && title !== "" && content !== "") {
			handleAddLetter(e, title, content);
		}
		setReadyToSend(!readyToSend);

		if (!readyToSend) {
			setTitle("");
			setContent("");
		}
	};

	const handleOnChange = (e) => {
		const selector = e.target.name;
		if (selector === "title") {
			return setTitle(e.target.value);
		}
		return setContent(e.target.value);
	};

	const deleteLetter = (id) => {
		const result = letters[containerName].filter((el) => el.id !== id && el);
		console.log({ name: containerName, newLetters: result });
		dispatch(deleteLetterFromStore({ name: containerName, newLetters: result }));
		// dispatch(deleteLetter({ name: name, newLetters: result }));
	};

	useEffect(() => {
		if (readyToSend) {
			return setButtonText("Listo");
		}
		return setButtonText("Agregar");
	}, [readyToSend]);
	return (
		<div className="letters-container">
			<h1 className="container-title">{containerName}</h1>
			<div className="options">
				<div className="button-box">
					<button
						name={containerName}
						className={`btn ${readyToSend && "btn-active"}`}
						onClick={handleOnClick}
					>
						{buttonText}
					</button>
				</div>
				<div className={`inputs-box ${show ? "show" : "hide"}`}>
					<input
						name="title"
						type="text"
						placeholder="Titulo"
						onChange={handleOnChange}
						value={title}
					/>
					<textarea
						name="content"
						type="text"
						placeholder="Contenido"
						rows="5"
						onChange={handleOnChange}
						value={content}
					/>
				</div>
			</div>
			<div className="letters">
				{lettersObject.length === 0 ? (
					<NoCards />
				) : (
					lettersObject.map((letter, index) => {
						return (
							<Card letter={letter} key={index} deleteLetter={deleteLetter} />
						);
					})
				)}
			</div>
		</div>
	);
};

export default LetterContainer;
