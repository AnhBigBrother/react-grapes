import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GrapesCustomPage from "./page/GrapesCustomPage";
import GrapesSdkPage from "./page/GrapesSdkPage";

function App() {
	return (
		<div style={{ display: "flex", flexDirection: "column", width: "100vw", height: "100vh" }}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "10vw",
					zIndex: "10",
					width: "100%",
					padding: "1rem",
					backgroundColor: "#737373",
				}}>
				<a href='/custom'>Grapes custom</a>
				<a href='/sdk'>Grapes sdk</a>
			</div>
			<div style={{ width: "100%", flexGrow: 1 }}>
				<Routes>
					<Route
						path='/react-grapes/custom'
						element={<GrapesCustomPage />}></Route>
					<Route
						path='/react-grapes/sdk'
						element={<GrapesSdkPage />}></Route>
					<Route
						path='*'
						element={<Navigate to={"/react-grapes/custom"} />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
