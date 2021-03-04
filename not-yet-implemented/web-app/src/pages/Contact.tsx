import React from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { IViewProps, RecaptchaState } from '../global/Interfaces';
import Page from '../viewTemplates/Page';
// import ReCaptchaCheck from './ReCaptchaCheck';


const Contact = (props: IViewProps) => {
	// props.
	function getSensitiveInfo() {
		switch (props.globalState.recaptchaVerified) {
			case RecaptchaState.Pending:
				return <CircularProgress className={props.classes.horizontalCenter} />
			case RecaptchaState.Verified:
				return <>
					<Typography variant="body1">We'd love to hear from you because you aren't a robot</Typography>
				</>
			case RecaptchaState.Failed:
				return <Typography variant="body1">Something went wrong with our robot filter. Please try refreshing the page or using a different browser.</Typography>
		}
	}

	return (<Page {...props} title="Contact">
		{getSensitiveInfo()}
	</Page>
	)
}

export default Contact