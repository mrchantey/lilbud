import AppBar from '@material-ui/core/AppBar';



import React from 'react';
import { Toolbar, IconButton, makeStyles, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';
import { IViewProps } from './Interfaces';


const useStyles = makeStyles(theme => ({
	buffer: {
		flexGrow: 1
	}
}))


const Header = (props: IViewProps) => {

	const classes = useStyles()
	const [menuOpen, set_menuOpen] = React.useState(false)

	const photoUrl = props.globalState.providers.firebase && props.globalState.providers.firebase.user ?
		props.globalState.providers.firebase.user.photoURL : null

	return <div>
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" onClick={_ => set_menuOpen(true)}>
					<MenuIcon />
				</IconButton>
				<div className={classes.buffer} />
				<IconButton edge="end" onClick={_ => props.history.push("/user")}>
					<Avatar src={photoUrl} />
				</IconButton>
			</Toolbar>
		</AppBar>
		<MenuDrawer {...props} isOpen={menuOpen} set_isOpen={set_menuOpen} />
	</div>

}

export default Header