import { h } from "vue";
import type { IconSet, IconAliases, IconProps } from "vuetify";

// Custom icon component
// I am extending the Icon module created by Atinux -> https://github.com/nuxt-modules/icon
import MIcon from "~~/components/MIcon.vue";
/**
 * Code for the icon component looks like this 
 * 
<template>
	<div>
		<Icon v-bind="$attrs" />
	</div>
</template>
<script setup></script>
 */

/**
 * I am using icon names from Icones - > https://icones.netlify.app/
 *
 * Using the Phospor pack here, but any icon name can be used.
 * All of vuetify's core icons MUST be added in the `aliases` object
 */

const aliases: IconAliases = {
	collapse: "ph:caret-up",
	complete: "ph:check",
	cancel: "ph:x-circle",
	close: "ph:x",
	delete: "ph:trash",
	clear: "ph:x-circle",
	success: "ph:check-circle",
	info: "ph:info",
	warning: "ph:warning",
	error: "ph:x-circle",
	prev: "ph:caret-left",
	next: "ph:caret-right",
	checkboxOn: "ph:check-square-fill",
	checkboxOff: "ph:square",
	checkboxIndeterminate: "ph:square-logo-fill",
	delimiter: "ph:circle-fill",
	sort: "ph:arrows-down-up-fill",
	expand: "ph:caret-down",
	menu: "ph:list",
	subgroup: "ph:caret-down-fill",
	dropdown: "ph:caret-down-fill",
	radioOn: "ph:radio-button-fill",
	radioOff: "ph:circle",
	edit: "ph:note-pencil",
	ratingEmpty: "ph:star",
	ratingFull: "ph:star-fill",
	ratingHalf: "ph:star-half-fill",
	loading: "ph:spinner",
	first: "ph:caret-double-left-duotone",
	last: "ph:caret-double-right-duotone",
	unfold: "ph:arrows-down-up",
	file: "ph:paperclip",
	plus: "ph:plus",
	minus: "ph:minus",
	sortAsc: "ph:sort-ascending",
	sortDesc: "ph:sort-descending",
};

const custom: IconSet = {
	component: (props: IconProps) =>
		// Return render function
		h(MIcon, {
			name: props.icon /** The Icon component requires the name prop in order to render the correct icon */,
			tag: props.tag,
			disabled: props.disabled,
		}),
};

// export both aliases and the custom object created
export { aliases, custom };
