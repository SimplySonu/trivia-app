import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
	return (
		<div className='main'>
			<div className='inside-main-div'>
				<h1 className='h1-tag'>Quizzical</h1>
				<h4 className='h4-tag'>Challenge yourself! Test your knowledge</h4>
			</div>
			<Link to='/quiz' className='start--quiz-button'>
				Start quiz
			</Link>
		</div>
	);
}
