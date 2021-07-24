import React, { useState } from "react";
import { Text, Input, Button, ScrollView } from "native-base";
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
		validateSessionId(sessionId).then((session) => {
			setIsLoading(false);
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
		});
	};

	return (
		<ScrollView contentContainerStyle={{ alignItems: "center" }}>
			<Text my={10}>
				Enter the session ID provided by your therapist below
			</Text>
			<Input
				mb={10}
				textAlign="center"
				minWidth={200}
				onChangeText={setSessionId}
			/>
			{error && (
				<Text mb={10}>
					The session ID you entered does not appear to be valid.
					Please confirm the session ID and try again.
				</Text>
			)}
			<Button onPress={handleSubmit} isLoading={isLoading}>
				Go
			</Button>
		</ScrollView>
	);
};
