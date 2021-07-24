import React from "react";
import { View } from "native-base";

export const Lightbar = ({ width, marginLeft }) => (
	<View
		style={{
			width: "85%",
			height: 200,
			borderColor: "black",
			borderWidth: "3px",
		}}
	>
		<View
			style={{
				width,
				marginLeft: `${marginLeft}%`,
				backgroundColor: "black",
				height: "100%",
			}}
		/>
	</View>
);
