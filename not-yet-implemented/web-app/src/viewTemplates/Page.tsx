import React from 'react';
import { IViewProps } from '../global/Interfaces';
import { Typography, Divider } from '@material-ui/core';

export interface iPageProps extends IViewProps {
	title: string
}

const Page = (props: iPageProps) => {
	return (
		<>
			<Typography variant="h2">{props.title}</Typography>
			<br />
			<Divider variant="middle" />
			<br />
			{props.children}
		</>
	)
}

export default Page