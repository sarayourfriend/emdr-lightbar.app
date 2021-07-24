import React, { createContext, useContext, useState } from "react";

const SessionContext = createContext([null, () => {}]);

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => (
	<SessionContext.Provider value={useState(null)}>
		{children}
	</SessionContext.Provider>
);
