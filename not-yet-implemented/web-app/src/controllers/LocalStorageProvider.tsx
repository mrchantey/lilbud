import React from 'react';
import { IAppProps } from '../global/Interfaces';


const key = "chantey-user-data"

export interface iLocalData {
	darkMode: boolean
}

export interface iLocalStorage {
	data: iLocalData,
	// getData: () => iLocalData,
	setData: (data: iLocalData) => void
}


const LocalStorageProvider = (props: IAppProps) => {

	React.useEffect(() => {
		if (typeof (Storage) === "undefined")
			return

		let initialData: iLocalData = {
			darkMode: false
		}
		const text = window.localStorage.getItem(key)
		if (text !== null)
			initialData = JSON.parse(text)


		props.set_globalState(state => {
			state.providers.localStorage = {
				setData,
				data: initialData
			}
			return { ...state }
		})

		function setData(newData: iLocalData) {
			const value = JSON.stringify(newData)
			window.localStorage.setItem(key, value)
			props.set_globalState(state => {
				if (state.providers.localStorage)
					state.providers.localStorage.data = newData
				return { ...state }
			})
		}
		return () => { }
	}, [])


	return null
}

export default LocalStorageProvider