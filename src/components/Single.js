/** @format */

import React, { useState, useEffect } from "react";
import axiosInstance from "../axios";
import { useParams } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flesxDirection: "column",
		alignItems: "center",
	},
}));

export default function Post() {
	const { slug } = useParams();
	const classes = useStyles();

	const [data, setData] = useState({ posts: [] });

	useEffect(() => {
		axiosInstance.get(slug).then((res) => {
			setData({ posts: res.data });
			console.log(res.data);
		});
	}, [setData, slug]);

	return (
		<Container componento="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}></div>
			<div className={classes.herocontent}>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						{data.posts.title}
					</Typography>
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						paragraph
					>
						{data.posts.excerpt}
					</Typography>
				</Container>
			</div>
		</Container>
	);
}
