/** @format */

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	toolbarTitle: {
		flexGrow: 1,
	},
}));

export default function Header() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseLine />
			<AppBar
				position="static"
				color="white"
				elevation={0}
				className={classes.appBar}
			>
				<Toolbar>
					<Typography
						variant="h6"
						color="inherit"
						nowrap
						className={classes.toolbarTitle}
					>
						<Link
							component={NavLink}
							to="/"
							underline="none"
							color="textprimary"
						>
							Blog
						</Link>
					</Typography>
					<nav>
						<Link
							color="textPrimary"
							href="#"
							className={classes.link}
							component={NavLink}
							to="/register"
						>
							Register
						</Link>
					</nav>
					<Button
						href="/login"
						variant="outlined"
						color="primary"
						className={classes.link}
					>
						Login
					</Button>
					<Button
						href="/logout"
						variant="outlined"
						color="primary"
						className={classes.link}
					>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
