import React from "react";
import { View } from "native-base";
import { useSession } from "../context/SessionContext";
import { useLightbarState } from "../hooks/useLightbarState";
import { useRequestAnimationFrame } from "../hooks/useRequestAnimationFrame";
import { Lightbar } from "../components/Lightbar";

export const ClientSessionScreen = () => {
	const [{ sessionId, settings: initialSettings }] = useSession();
	const [state, dispatch] = useLightbarState({ sessionId, initialSettings });
	useRequestAnimationFrame(dispatch);

	return (
		<View alignItems="center" justifyContent="center" height="100%">
			<Lightbar width={state.width} marginLeft={state.marginLeft} />
		</View>
	);
};
