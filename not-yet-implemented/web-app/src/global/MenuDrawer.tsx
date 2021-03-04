import React from 'react';
import { makeStyles, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import {
	Home as HomeIcon,
	Info as InfoIcon,
	AccountCircle as AccountCircleIcon,
	People as PeopleIcon,
	Settings as SettingsIcon,
} from '@material-ui/icons';
import { IViewProps } from './Interfaces';
const useStyles = makeStyles(theme => ({
	drawer: {
		minWidth: '300em'
	}
}))

interface IMenuDrawerProps extends IViewProps {
	isOpen: boolean,
	set_isOpen(val: boolean): any
}


const MenuDrawer = ({ history, isOpen, set_isOpen }: IMenuDrawerProps) => {

	function goTo(url: string) {
		set_isOpen(false)
		history.push(url)
	}
	const classes = useStyles()
	return (
		<SwipeableDrawer className={classes.drawer}
			anchor="left"
			open={isOpen}
			onClose={() => set_isOpen(false)}
			onOpen={() => set_isOpen(true)}
		>
			<List>
				<ListItem button onClick={_ => goTo('/')} >
					<ListItemIcon><HomeIcon /></ListItemIcon>
					<ListItemText primary="Home" />
				</ListItem>
				<Divider />
				<ListItem button onClick={_ => goTo('/user')}>
					<ListItemIcon><AccountCircleIcon /></ListItemIcon>
					<ListItemText primary="Profile" />
				</ListItem>
				<ListItem button onClick={_ => goTo('/contact')} >
					<ListItemIcon><InfoIcon /></ListItemIcon>
					<ListItemText primary="Contact" />
				</ListItem>
				<ListItem button onClick={_ => goTo('/settings')}>
					<ListItemIcon><SettingsIcon /></ListItemIcon>
					<ListItemText primary="Settings" />
				</ListItem>
			</List>
		</SwipeableDrawer >
	)
}

export default MenuDrawer