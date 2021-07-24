import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "./HomeScreen";
import { TherapistStackScreen } from "./TherapistStack";
import { ClientStackScreen } from "./ClientStack";

const AppBottomTabs = createBottomTabNavigator();

export const AppBottomTabsScreen = () => (
	<AppBottomTabs.Navigator>
		<AppBottomTabs.Screen name="Home" component={HomeScreen} />
		<AppBottomTabs.Screen
			name="Therapist"
			component={TherapistStackScreen}
		/>
		<AppBottomTabs.Screen name="Client" component={ClientStackScreen} />
	</AppBottomTabs.Navigator>
);
