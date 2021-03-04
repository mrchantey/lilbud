import React from 'react';
import { Typography, Grid, makeStyles, Divider } from '@material-ui/core';
import { IViewProps } from '../global/Interfaces';


const useStyles = makeStyles({
	logo: {
		// display: 'block',
		// width: '10em',
		height: '10em',
		// marginLeft: 'auto',
		// marginRight: 'auto'
	},
	title: {
		fontFamily: `"Trebuchet MS", Helvetica, sans-serif`,
		fontSize: '4rem',
		width: '100%',
		textAlign: 'center',

	},
	subTitle: {
		textAlign: 'center',
		fontSize: '1.5rem',
		fontStyle: "italic",
	}
})


function Home(props: IViewProps) {

	const classes = useStyles()
	return (<>
		<br />
		<br />
		<br />
		<img className={`${classes.logo} ${props.classes.horizontalCenter}`} src="https://material-ui.com/static/logo_raw.svg" alt="logo" />
		<br />
		<Typography variant="h1" className={classes.title}>Web App</Typography>
		<br />
		<Divider variant="middle" />
		<br />
		<Typography variant="h3" className={classes.subTitle}>This is a web app</Typography>
	</>
	)
}


export default Home