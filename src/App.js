import React from "react";
import Main from "./Components/Main";
import Quiz from "./Components/Quiz";
import "./styles.css";
import blobTop from "./Images/blobTop.svg";
import blobBottom from "./Images/blobBottom.png";
import { Switch, Route } from "react-router-dom";

export default function App() {
	return (
		<>
			<img src={blobTop} alt='top-img' className='ui-image' />
			<div className='parent-container'>
				<Switch>
					<Route path='/' component={Main} exact />
					<Route path='/quiz' component={Quiz} exact />
				</Switch>
			</div>
			<img src={blobBottom} alt='bottom-img' className='ui-image-bottom' />
		</>
	);
}
