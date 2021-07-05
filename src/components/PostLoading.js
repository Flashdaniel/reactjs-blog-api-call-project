/** @format */

import React from "react";

export default function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: "25px" }}>Can not find any post now, sorry!</p>
		);
	};
}
