import React from "react";
import Question from "./Question";
import arr from "../data";
import { nanoid } from "nanoid";

export default function Quiz() {
	let [data, setData] = React.useState(arr);

	let answersArr = data.map((obj) => obj.correct_answer);

	let [userArr, setuserArr] = React.useState({});

	const [end, setEnd] = React.useState(false);

	const [count, setCount] = React.useState(0);

	const [validation, setValidation] = React.useState([]);

	// alert(JSON.stringify(userArr));

	function userClick(event, pos) {
		setuserArr((preVal) => ({
			...preVal,
			[pos]: {
				val: event.target.innerText,
			},
		}));
	}

	let questionComponent = data.map((obj, index) => (
		<Question
			key={index}
			question={obj.question}
			optionsArr={obj.options}
			onHandle={() => userClick(event, index)}
			colorValid={
				validation[index] !== undefined && [
					obj.options.indexOf(obj.correct_answer),
					validation[index],
				]
			}
		/>
	));
	function checkResult() {
		let count = 0;
		let validationArr = [];
		for (let i in userArr) {
			if (answersArr.includes(userArr[i].val)) {
				count += 1;
				validationArr.push(true);
			} else {
				validationArr.push(false);
			}
		}
		setValidation(validationArr);
		setCount(() => count);
	}

	return (
		<div className='quiz-questions-components'>
			{questionComponent}
			<div className='bottom--result-check'>
				<h4 className='final--score'>You scored {count}/5 correct answers</h4>

				<div className='submit--button' onClick={checkResult}>
					Check
				</div>
			</div>
		</div>
	);
}
