import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { SessionProvider } from "./context/SessionContext";
import { ClientStackScreen } from "./screens/ClientStack";

export default function App() {
	return (
		<NativeBaseProvider>
			<SessionProvider>
				<NavigationContainer>
					<ClientStackScreen />
				</NavigationContainer>
			</SessionProvider>
		</NativeBaseProvider>
	);
}
