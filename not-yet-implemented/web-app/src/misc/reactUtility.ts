import React from 'react';



interface iTimestamp {
	milliseconds?: number,
	seconds?: number
}

function GetLocalUrl() {
	return window.location.href
		.replace("http://localhost:3000/", '')
		.replace("https://localhost:3000/", '')
		.replace("http://192.168.86.117:3000/", '')
		.replace("https://192.168.86.117:3000/", '')
		.replace("http://www.chantey.org/", '')
		.replace("https://www.chantey.org/", '')
		.replace("http://chantey.org/", '')
		.replace("https://chantey.org/", '')
		.replace("https://chantey.web.app/", '')
		.replace("https://chantey.firebaseapp.com/", '')
		.replace("www.chantey.org/", '')
}

function copyToClipboard(str: string) {
	const el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style.display = 'hidden';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};
//https://ryankubik.com/blog/use-ref-state/
function useRefState(initialValue: any) {
	const [state, setState] = React.useState(initialValue)
	const stateRef = React.useRef(state)
	React.useEffect(() => { stateRef.current = state }, [state])
	return [state, stateRef, setState]
}

function useForceUpdate() {
	const [value, setValue] = React.useState(0); // integer state
	return () => setValue(v => ++v); // update the state to force render
}


function formatTimeUnit(timestamp: iTimestamp): string {

	function parseMillis(millis: number): string {
		if (millis < 1000)
			return `${millis.toFixed(0)} millis`
		const secs = timestamp.seconds || millis / 1000
		if (secs < 60)
			return `${secs.toFixed(0)} seconds`
		const mins = secs / 60
		if (mins < 60)
			return `${mins.toFixed(1)} mins`
		const hours = mins / 60
		if (hours < 24)
			return `${hours.toFixed(1)} hours`
		const days = hours / 24
		return `${days.toFixed(1)} days`
	}
	if (!timestamp)
		return 'n/a'
	if (timestamp.seconds)
		return parseMillis(timestamp.seconds * 1000)
	else if (timestamp.milliseconds)
		return parseMillis(timestamp.milliseconds)
	else
		return 'n/a'
}

function formatDate(timestamp: { milliseconds?: number, seconds?: number }): string {
	if (!timestamp)
		return "null"
	const hhmmss = (str: string) => str.replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

	function parseMillis(millis: number) {
		const date = new Date(millis)
		return `${date.toDateString()} - ${hhmmss(date.toTimeString())}`
	}
	if (timestamp.seconds)
		return parseMillis(timestamp.seconds * 1000)
	else if (timestamp.milliseconds)
		return parseMillis(timestamp.milliseconds)
	return "null"
}


let uid = 0;
function getUid() {
	return uid++
}


// const ChangeListener = ({ value, callback }) => {
// 	const [lastValue, set_lastValue] = React.useState(null)

// 	React.useEffect(_ => {
// 		let isMounted = { value: true }
// 		if (value !== lastValue) {
// 			set_lastValue(value)
// 			callback(isMounted)
// 		}
// 		return () => isMounted.value = false
// 	}, [value])

// 	return null
// }




export {
	formatDate,
	formatTimeUnit,
	GetLocalUrl,
	useRefState,
	useForceUpdate,
	getUid,
	copyToClipboard,
	// ChangeListener
}