import { Classes } from "./theme";
import { iLocalStorage } from '../controllers/LocalStorageProvider';

export enum RecaptchaState {
	Pending,
	Verified,
	Failed
}


export interface IGlobalState {
	recaptchaVerified: RecaptchaState,
	storageManifest?: any,
	// darkMode: boolean,
	providers: {
		firebase?: {
			user?: any,
			auth: any,
			uiConfig: any,
			cloudFirestore: any,
			realtimeDatabase: any,
		},
		localStorage?: iLocalStorage
	}
}

export interface IAppProps {
	children?: React.ReactNode,
	classes: Classes,
	globalState: IGlobalState,
	set_globalState: React.Dispatch<React.SetStateAction<IGlobalState>>
}

export interface IViewProps extends IAppProps {
	history: any
}

