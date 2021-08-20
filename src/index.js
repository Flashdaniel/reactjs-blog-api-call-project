/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Single from "./components/Single";
import Search from "./components/Search";
import Admin from "./Admin";
import Create from "./components/admin/create";
import Edit from "./components/admin/edit";
import Delete from "./components/admin/delete";

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/admin/" component={Admin} />
				<Route exact path="/admin/create" component={Create} />
				<Route exact path="/admin/edit/:id" component={Edit} />
				<Route exact path="/admin/delete/:id" component={Delete} />
				<Route exact path="/post/:slug" component={Single} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/logout" component={Logout} />
				<Route path="/search" component={Search} />
			</Switch>
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
