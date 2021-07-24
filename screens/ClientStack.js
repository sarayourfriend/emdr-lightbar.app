import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ClientScreen } from "./ClientScreen";
import { ClientSessionScreen } from "./ClientSessionScreen";

const ClientStack = createStackNavigator();

export const ClientStackScreen = () => (
	<ClientStack.Navigator>
		<ClientStack.Screen
			name="ClientScreen"
			component={ClientScreen}
			options={{ headerTitle: "Session" }}
		/>
		<ClientStack.Screen
			name="ClientSession"
			component={ClientSessionScreen}
			options={{ headerTitle: "Session" }}
		/>
	</ClientStack.Navigator>
);
