import React from "react";

export default function Question(props) {
	const [clickedVal, setClickedVal] = React.useState();

	function clicked(event) {
		console.log("clicked");
		setClickedVal(event.target.id);
	}

	return (
		<div className='question-component'>
			<h1 className='question'>{props.question}</h1>
			<div className='options'>
				<div
					id='0'
					className={`inside-options ${clickedVal === "0" && "click-color"}`}
					onClick={() => {
						props.onHandle();
						clicked(event);
					}}
					style={{
						backgroundColor: `${
							props.colorValid[0] === 0 && props.colorValid[1] === true
								? "green"
								: ""
						}`,
					}}>
					{props.optionsArr[0]}
				</div>
				<div
					id='1'
					className={`inside-options ${clickedVal === "1" && "click-color"}`}
					onClick={() => {
						props.onHandle();
						clicked(event);
					}}
					style={{
						backgroundColor: `${
							props.colorValid[0] === 1 && props.colorValid[1] === true
								? "green"
								: ""
						}`,
					}}>
					{props.optionsArr[1]}
				</div>
				<div
					id='2'
					className={`inside-options ${clickedVal === "2" && "click-color"}`}
					onClick={() => {
						props.onHandle();
						clicked(event);
					}}
					style={{
						backgroundColor: `${
							props.colorValid[0] === 2 && props.colorValid[1] === true
								? "green"
								: ""
						}`,
					}}>
					{props.optionsArr[2]}
				</div>
				<div
					id='3'
					className={`inside-options ${clickedVal === "3" && "click-color"}`}
					onClick={() => {
						props.onHandle();
						clicked(event);
					}}
					style={{
						backgroundColor: `${
							props.colorValid[0] === 3 && props.colorValid[1] === true
								? "green"
								: ""
						}`,
					}}>
					{props.optionsArr[3]}
				</div>
			</div>
			<hr />
		</div>
	);
}
