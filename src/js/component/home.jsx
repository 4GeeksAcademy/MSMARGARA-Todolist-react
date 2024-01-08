import React from "react";
import TodoList from "./todolist";

const Home = () => {
	return (
		<div className="container">
			<div className="rounded">
				<h1 id="title">todos</h1>
			</div>
			<ul>
				<TodoList/>		
			</ul>
		</div>
	)
}
		
export default Home;
