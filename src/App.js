/** @format */

import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import PostLoadingcomponent from "./components/PostLoading";
import "./App.css";

export default function App() {
	const PostLoading = PostLoadingcomponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = "http://127.0.0.1:8000/api/";
		fetch(apiUrl)
			.then((res) => res.json())
			.then(
				(posts) => {
					setAppState({ loading: false, posts: posts });
				},
				(error) => {
					console.log(error);
				}
			);
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
