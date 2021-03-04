import React from 'react';
import { IViewProps } from '../global/Interfaces';
import { Typography, Divider, FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { PersonalVideo } from '@material-ui/icons';
import Page from '../viewTemplates/Page';

type iEvent = React.ChangeEvent<HTMLInputElement>

export function Settings(props: IViewProps) {
	return <Page {...props} title="Settings">
		<FormGroup>
			<FormControlLabel
				label="Dark Mode"
				control={
					<Switch
						checked={props.globalState.providers.localStorage?.data.darkMode}
						// onChange={e => props.set_globalState(prev => ({ ...prev, darkMode: e.target.checked }))}
						onChange={e => {
							const data = props.globalState.providers.localStorage?.data
							if (!data) return
							data.darkMode = e.target.checked
							props.globalState.providers.localStorage?.setData(data)
						}}
						name="darkMode"
						color="primary"
					/>
				}
			/>
		</FormGroup>
	</Page>
}

