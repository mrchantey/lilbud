import React from 'react';
import { useHistory } from 'react-router-dom';
import { IAppProps } from './Interfaces';
import { Grid } from '@material-ui/core';
import Header from './Header';
import AppRouter from '../controllers/AppRouter';
import Footer from './Footer';


const View = (props: IAppProps) => {
	const { classes } = props
	const globalProps = {
		...props,
		history: useHistory()
	}

	return (
		<div className={classes.body}>
			<Grid container direction="column">
				<Grid item><Header {...globalProps} /></Grid>
				<Grid item><br /></Grid>
				<Grid item container>
					<Grid item xs={false} sm={1} md={2} />
					<Grid item xs={12} sm={10} md={8}>
						<AppRouter {...globalProps} />
					</Grid>
					<Grid item xs={false} sm={1} md={2} />
				</Grid>
			</Grid >
			<Footer {...globalProps} />
		</div>
	)
}

export default View