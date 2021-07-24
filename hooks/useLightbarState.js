import { useReducer, useEffect } from "react";
import EventSource from "rn-eventsource";
import { reducer, initialState, receiveApiState } from "../reducers/lightbar";

export function useLightbarState({ sessionId }) {
	const [state, dispatch] = useReducer(reducer, {
		...initialState,
	});
	useEffect(() => {
		const es = new EventSource(
			`${process.env.API_BASE}/client/settings/${sessionId}`
		);
		es.onmessage = (event) => {
			dispatch(receiveApiState(JSON.parse(event.data)));
		};

		return () => {
			es.close();
		};
	}, [sessionId]);
	return [state, dispatch];
}
