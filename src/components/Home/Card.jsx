import { useState } from "react";

const Card = ({ letter, deleteLetter }) => {
	const [showDescription, setShowDescription] = useState(true);

	const handleOnClick = () => {
		setShowDescription(!showDescription);
		console.log(letter);
	};
	return (
		<div
			className="card"
			onClick={handleOnClick}
			// style={letter.image && { color: "white" }}
		>
			{letter.image && <img className="bg-letter" src={letter.image} />}
			<div className="title-phone">
				<h3>{letter.title}</h3>
			</div>
			<div className="delete-button" onClick={() => deleteLetter(letter.id)}>
				<i className="fas fa-times"></i>
			</div>
			<div
				className="content-box"
				style={
					showDescription
						? { height: 0 }
						: { height: "200px", marginTop: "20px" }
				}
			>
				<p>{letter.content}</p>
			</div>
		</div>
	);
};

export default Card;
