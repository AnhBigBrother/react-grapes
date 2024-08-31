import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
	<StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</StrictMode>,
	document.getElementById("root")
);
