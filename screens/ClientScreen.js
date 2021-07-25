import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { View, Text, Input, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { useSession } from "../context/SessionContext";
import { validateSessionId } from "../api/validate-session-id";

export const ClientScreen = () => {
	const [, persistSession] = useSession();
	const [isLoading, setIsLoading] = useState(false);
	const [sessionId, setSessionId] = useState("");
	const [error, setError] = useState(null);
	const navigation = useNavigation();

	const handleSubmit = () => {
		setError(null);
		setIsLoading(true);
		validateSessionId(sessionId.trim()).then((session) => {
			if (session) {
				const {
					session_id: validatedSessionId,
					initial_settings: settings,
				} = session;
				persistSession({
					sessionId: validatedSessionId,
					settings,
				});
				navigation.navigate("ClientSession");
			} else {
				setError(true);
			}
			setIsLoading(false);
		});
	};

	return (
		<ScrollView contentContainerStyle={{ alignItems: "center" }}>
			{!isLoading ? (
				<>
					<Text my={5}>
						Enter the session ID provided by your therapist below
					</Text>
					<Input
						mb={10}
						textAlign="center"
						minWidth={200}
						onChangeText={setSessionId}
						onSubmitEditing={handleSubmit}
						backgroundColor="white"
						borderWidth={2}
						autoCorrect={false}
						autoCapitalize="characters"
					/>
					{error && (
						<Text mb={10}>
							The session ID you entered does not appear to be
							valid. Please confirm the session ID and try again.
						</Text>
					)}
				</>
			) : (
				<View alignItems="center" justifyContent="center">
					<ActivityIndicator
						color="gray"
						style={{ marginTop: 50 }}
						size="large"
					/>
				</View>
			)}
		</ScrollView>
	);
};
