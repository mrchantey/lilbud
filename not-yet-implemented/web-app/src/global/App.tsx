import React from 'react';
import { createTheme, useGlobalStyles } from './theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { IGlobalState, RecaptchaState } from './Interfaces';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import RecaptchaExecutor from '../controllers/RecaptchaExecutor';
import StorageManifest from '../data/storage-manifest.json';
import FirebaseProvider from '../controllers/FirebaseProvider';
import View from './View';
import LocalStorageProvider from '../controllers/LocalStorageProvider';



function App() {
	const classes = useGlobalStyles()

	const [globalState, set_globalState] = React.useState<IGlobalState>({
		// darkMode: true,
		recaptchaVerified: RecaptchaState.Pending,
		storageManifest: null,
		providers: {}
	})

	const globalProps = {
		classes,
		globalState,
		set_globalState
	}


	const theme = createTheme(globalProps)

	async function fetchStorageManifest() {
		set_globalState(val => ({ ...val, storageManifest: StorageManifest }))
	}

	React.useEffect(() => { fetchStorageManifest() }, [])


	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<FirebaseProvider {...globalProps} />
			<LocalStorageProvider {...globalProps} />
			<GoogleReCaptchaProvider reCaptchaKey="6LdtmMMZAAAAAKnTCm56ew_ocdiYse8jwtHqtb21" >
				<RecaptchaExecutor {...globalProps} actionName="global_captcha" />
				<Router>
					<View {...globalProps} />
				</Router>
			</GoogleReCaptchaProvider>
			{/* </FirebaseProvider> */}
		</ThemeProvider>
	);
}

export default App;
