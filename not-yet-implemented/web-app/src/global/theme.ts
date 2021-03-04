import { createMuiTheme, Theme, makeStyles } from "@material-ui/core";
import { IAppProps } from './Interfaces';
/*
color tool:		https://material.io/resources/color/#!/?view.left=0&view.right=0
my theme:		https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=81C784&secondary.color=FFAB91

*/


export interface ThemeProps {
	darkMode: boolean
}

const primary = {
	main: `#3f51b5`,
	light: `#7986cb`,
	dark: `#303f9f`
}

const secondary = {
	main: `#f50057`,
	light: `#ff4081`,
	dark: `#c51162`
}

const textColor = {
	primary: `rgba(0, 0, 0, 0.87)`,
	secondary: `rgba(0, 0, 0, 0.54)`,
	tertiary: `rgba(0, 0, 0, 0.38)`
}

export type Classes = Record<
	"goodImg" |
	"body" |
	// "footerContainer" |
	"footerBuffer" |
	"footer" |
	"horizontalCenter" |
	"textPrimary" |
	"textSecondary" |
	"textTertiary"
	, string>


const useGlobalStyles = makeStyles({
	goodImg: {
		width: '100%'
	},
	body: {
		display: 'flex',
		flexFlow: "column",
		minHeight: '100vh'
	},
	footerBuffer: {
		flexGrow: 1
	},
	footer: {
		textAlign: 'center',
		width: '100%',
		backgroundColor: primary.light
	},
	horizontalCenter: {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	textPrimary: {
		color: textColor.primary
	},
	textSecondary: {
		color: textColor.secondary
	},
	textTertiary: {
		color: textColor.tertiary
	}
})

const titlePadding = `0.1em 1em`

function createTheme(props: IAppProps): Theme {
	return createMuiTheme({
		palette: {
			type: props.globalState.providers.localStorage?.data.darkMode ? "dark" : "light",
			// primary,
			// secondary
		},
		typography: {
			h1: {
				padding: titlePadding
			},
			h2: {
				padding: titlePadding
			},
			h3: {
				padding: titlePadding,
			},
			h4: {
				padding: titlePadding,
			},
			h5: {
				padding: titlePadding
			},
			h6: {
				padding: titlePadding
			}
		},
		overrides: {
			// img
		}
	})
}

export {
	createTheme,
	useGlobalStyles
}