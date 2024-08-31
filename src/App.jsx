import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import GrapesCustomPage from "./page/GrapesCustomPage";
import GrapesSdkPage from "./page/GrapesSdkPage";

function App() {
	return (
		<div style={{ display: "flex", flexDirection: "column", width: "100vw", height: "100vh" }}>
			<ul
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "10vw",
					zIndex: "10",
					width: "100%",
					padding: "1rem",
					backgroundColor: "#737373",
				}}>
				<li>
					<Link to={"/custom"}>Custom</Link>
				</li>
				<li>
					<Link to={"/sdk"}>Sdk</Link>
				</li>
			</ul>
			<div style={{ width: "100%", flexGrow: 1 }}>
				<Routes>
					<Route
						path='/custom'
						element={<GrapesCustomPage />}></Route>
					<Route
						path='/sdk'
						element={<GrapesSdkPage />}></Route>
					<Route
						path='*'
						element={<Navigate to={"/custom"} />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
