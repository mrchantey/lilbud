import React from 'react';
import { IViewProps } from './Interfaces';
import { Typography } from '@material-ui/core';


const Footer = (props: IViewProps) => {
	const { classes } = props
	return (<>
		<div className={classes.footerBuffer} />
		<br />
		<div className={classes.footer}>
			<Typography className={classes.textTertiary} variant="body2">&copy; web app {new Date().getFullYear()}</Typography>
			<Typography className={classes.textTertiary} variant="body2">This site is protected by reCAPTCHA. The Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</Typography>
			<div></div>
		</div>
	</>
	)
}

export default Footer