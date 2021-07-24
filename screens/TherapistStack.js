import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TherapistScreen } from "./TherapistScreen";

const TherapistStack = createStackNavigator();

export const TherapistStackScreen = () => (
	<TherapistStack.Navigator>
		<TherapistStack.Screen
			name="TherapistScreen"
			component={TherapistScreen}
		/>
	</TherapistStack.Navigator>
);
