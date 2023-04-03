import { DefaultsInstance } from "vuetify/lib/framework.mjs";

/**
 * A few defaults that I like
 */
export const defaults: DefaultsInstance = {
	VAppBar: {
		elevation: 0,
	},
	VBtn: {
		variant: "flat",
		height: 38,
		rounded: "lg",
		size: "small",
	},
	VTextField: {
		color: "primary",
		variant: "outlined",
		density: "comfortable",
	},
};
