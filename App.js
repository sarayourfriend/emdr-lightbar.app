import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { SessionProvider } from "./context/SessionContext";
import { AppBottomTabsScreen } from "./screens/AppBottomTabsScreen";

export default function App() {
	return (
		<NativeBaseProvider>
			<SessionProvider>
				<NavigationContainer>
					<AppBottomTabsScreen />
				</NavigationContainer>
			</SessionProvider>
		</NativeBaseProvider>
	);
}
