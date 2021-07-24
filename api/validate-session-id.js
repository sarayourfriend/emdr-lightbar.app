import { API_BASE } from "./constants";

export const validateSessionId = async (sessionId) => {
	try {
		const response = await fetch(
			`${API_BASE}/session/${encodeURIComponent(sessionId)}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return response.status < 400 ? response.json() : null;
	} catch (e) {
		return null;
	}
};
