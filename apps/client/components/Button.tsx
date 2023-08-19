type PropsType = {
	text: string;
	onClick: () => void;
	color: string;
	fontSize: string;
};

const Button = ({ text, onClick, color, fontSize }: PropsType) => {
	return (
		<button
			className={`${color} ${fontSize} rounded-lg p-2 shadow-lg transition duration-200 ease-in-out hover:scale-105 hover:shadow-xl`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
