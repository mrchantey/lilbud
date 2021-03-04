import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { IViewProps } from '../global/Interfaces';
import Page from '../viewTemplates/Page';



const User = (props: IViewProps) => {
	const { firebase } = props.globalState.providers
	if (!firebase)
		return null

	function getSignInCard(firebase: any) {
		if (firebase.user) {
			return <>
				<Button onClick={async () => await firebase.auth.signOut()}>Sign Out</Button>
			</>
		} else {
			return <>
				<StyledFirebaseAuth uiConfig={firebase.uiConfig} firebaseAuth={firebase.auth} />
			</>
		}
	}

	const title = firebase.user ? `Welcome ${firebase.user.displayName}` : 'Sign In'

	return <Page {...props} title={title}>
		{getSignInCard(firebase)}
	</Page>
}

export default User