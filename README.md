# Nuxt 3 + Vuetify 3 Starter

![Starter Image](/public/starter.png)
Soooo... Vuetify just released version 3.. Nuxt is at rc13 (will be released soon).
This template here will get you up & running with adding the two together :)


## Demo Here

[Online Demo](https://vuetify3nuxt3starter.behonbaker.com)
### Run the app

1. Install the deps

```bash
npm install
```

2. Run the app

```bash
npm run dev
```

### Stuff used

- NuxtJS
- Nuxt Icon
- Sass
- Vuetify
- kevinmarrec/nuxt-pwa
- Vite Plugin Vuetify

### Custom Sass File

The `.scss` file that can be found in the `assets` folder have some gradients & other styles. They can be deleted or updated.

### Helpers Folder

The helper folder contains the custom stuff for the Vuetify plugin

#### Custom Icons - `customIcons.ts`

1. Create the Icon component that will be used to render the icons. I just extended the Icon component from the `nuxt-icon` package.

```vue
<template>
	<div>
		<Icon v-bind="$attrs" />
	</div>
</template>
<script setup></script>
```

2. Create the `aliases` object. Ensure that you pass in all the icons that are used by the Vuetify system.

3. Create the `custom` object.

```ts
const custom: IconSet = {
	component: (props: IconProps) =>
		// Return render function
		h(MIcon, {
			name: props.icon /** The Icon component requires the name prop in order to render the correct icon */,
			tag: props.tag,
			disabled: props.disabled,
		}),
};
```

Here is a link to the docs for this [Creating a custom iconset](https://next.vuetifyjs.com/en/features/icon-fonts/#creating-a-custom-icon-set)

#### Global Defaults - `defaults.ts`

This file here just set global props on different vuetify components. You can learn more here [Global Configuration](https://next.vuetifyjs.com/en/features/global-configuration/)

#### Themes - `themes.ts`

This file will hold all the different themes that you want to use in your app. Feel free to add more crazy schemes lol. Learn more here: [Vuetify Themes](https://next.vuetifyjs.com/en/features/theme/)

#### Form Rules - Composable

I added one composable for form rules. Add more here. You can even try integrating other validation packages like `yup` or `zod`

#### Icons

The public folder contains a `favicon` & `icon`. Change these out for your app and be sure to tweak the pwa config inside the `nuxt.config` file to fit your app
