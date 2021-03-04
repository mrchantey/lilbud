import React from 'react';
import firebase from 'firebase';
import 'firebase/auth'
import firebaseConfig from './secret/firebaseConfig.json';
import { IAppProps } from '../global/Interfaces';


const FirebaseProvider = (props: IAppProps) => {

	React.useEffect(() => {
		// firebase
		firebase.initializeApp(firebaseConfig)
		const uiConfig = {
			signInSuccessUrl: '/on-sign-in',
			signInFlow: 'popup',
			signInOptions: [
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			],
			tosUrl: () => { window.location.assign('/terms-of-service'); },
			privacyPolicyUrl: () => { window.location.assign('/privacy-policy'); }
		};

		const auth = firebase.auth()

		const cloudFirestore = firebase.firestore()
		const realtimeDatabase = firebase.database()
		props.set_globalState(state => ({
			...state, providers: {
				...state.providers, firebase: {
					user: null,
					uiConfig,
					auth,
					cloudFirestore,
					realtimeDatabase
				}
			}
		}))

		auth.onAuthStateChanged(function (user) {
			if (user)
				console.log("firebase - signed in...");
			else
				console.log("firebase - signed out...");
			props.set_globalState(state => {
				if (state.providers.firebase)
					state.providers.firebase.user = user
				return { ...state }
			})
		});

		return () => { }
	}, [])

	return null
	// return <>{props.children}</>
}

export default FirebaseProvider