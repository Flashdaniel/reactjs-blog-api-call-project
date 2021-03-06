/** @format */

import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import PostLoadingcomponent from "./components/PostLoading";
import axiosInstance from "./axios";
import "./App.css";

export default function App() {
	const PostLoading = PostLoadingcomponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
