import React from 'react';
import { IAppProps, RecaptchaState } from '../global/Interfaces';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface RecaptchaProps extends IAppProps {
	actionName: string
}


const RecaptchaExecutor = (props: RecaptchaProps) => {
	const { actionName = "default_action", set_globalState } = props
	const { executeRecaptcha } = useGoogleReCaptcha()

	async function getRecaptchaScore() {
		if (!executeRecaptcha)
			return
		const token = await executeRecaptcha(actionName)
		console.log('recaptcha token received...');
		const response = await fetch("https://asia-east2-chantey.cloudfunctions.net/recaptcha", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				appName: "localhost",
				token
			})
		})
		const json = await response.json()
		console.log(`recaptcha score: ${json.score}`);
		if (json.score > 0.5)
			set_globalState(val => ({ ...val, recaptchaVerified: RecaptchaState.Verified }))
		else {
			alert("This request has been flagged as suspicions. Please try refreshing the page or using a different browser.")
			set_globalState(val => ({ ...val, recaptchaVerified: RecaptchaState.Failed }))
		}
	}

	React.useEffect(() => {
		getRecaptchaScore()
	}, [])


	return null
}

export default RecaptchaExecutor