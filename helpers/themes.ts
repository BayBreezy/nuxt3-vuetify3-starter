import { ThemeDefinition } from "vuetify";

// String that represents the name of the theme I am using
export const MAIN_THEME = "mainTheme";
// Light mode theme
export const mainTheme: ThemeDefinition = {
	dark: false,
	colors: {
		background: "#FFFFFF",
		surface: "#FFFFFF",
		primary: "#4f46e5",
		secondary: "#9333ea",
		error: "#ef4444",
		info: "#3b82f6",
		success: "#22c55e",
		warning: "#f59e0b",
	},
};

// String that represents the name of the dark theme I am using
export const MAIN_DARK_THEME = "mainDarkTheme";
// Dark mode theme
export const mainDarkTheme: ThemeDefinition = {
	dark: true,
	colors: {
		background: "#0C111B",
		surface: "#1f2937",
		primary: "#6366f1",
		secondary: "#9333ea",
		error: "#ef4444",
		info: "#3b82f6",
		success: "#22c55e",
		warning: "#f59e0b",
	},
};
