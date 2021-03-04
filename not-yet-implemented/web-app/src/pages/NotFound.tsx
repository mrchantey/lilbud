import React from 'react';
import { useRefState, GetLocalUrl } from '../misc/reactUtility';
import { IViewProps } from '../global/Interfaces';



const NotFound = (props: IViewProps) => {

	const [countdown, ref_countdown, set_countdown] = useRefState(4)

	React.useEffect(() => {
		const interval = setInterval(() => {
			if (ref_countdown.current === 1)
				props.history.goBack()
			else
				set_countdown(ref_countdown.current - 1)
		}, 1000);
		return () => clearInterval(interval)
	}, [])
	const location = GetLocalUrl()
	return <div>
		<h1> page at "{location}" not found, redirecting in {countdown}</h1>
	</div>
}

export default NotFound