export default function Button({ text, onClick }) {
	onClick = onClick || function() {}
	return (
		<button onClick={onClick} className="bg-transparent border border-gray-300 text-black rounded-full font-cinzel">
			{text}
		</button>
	);
}

