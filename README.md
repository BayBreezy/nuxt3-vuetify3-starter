# Nuxt 3 + Vuetify 3 Starter

![Starter Image](/public/starter.png)
Nuxt 3 is now stable. Vuetify 3 is now stable. I will be updating this template as we go along. Feel free to open an issue if you have any questions or suggestions.
This template here will get you up & running with adding the two together :)

## Demo Here

[Online Demo](https://vuetify3nuxt3starter.behonbaker.com)

## How to use

As time passes, I will be updating this template. It will grow with some more pages. It all started with the login & register pages. I may keep a running list of pages added here.

### Pages

<details>
<summary>Click to see the pages added & planned</summary>

- [x] Login
- [x] Register
- [x] Reset Password

</details>

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

### ~~Helpers Folder~~ Utils Folder

The ~~helper~~ utils folder contains the custom stuff for the Vuetify plugin

#### Custom Icons - `customIcons.ts`

So I switched from the nuxt-icon module to the @iconify/vue component [here](https://docs.iconify.design/icon-components/vue/). It plays better with Vuetify with custom icons

Here is a link to the docs for this [Creating a custom iconset](https://next.vuetifyjs.com/en/features/icon-fonts/#creating-a-custom-icon-set)

#### Global Defaults - `defaults.ts`

This file here just set global props on different vuetify components. You can learn more here [Global Configuration](https://next.vuetifyjs.com/en/features/global-configuration/)

#### Themes - `themes.ts`

This file will hold all the different themes that you want to use in your app. Feel free to add more crazy schemes lol. Learn more here: [Vuetify Themes](https://next.vuetifyjs.com/en/features/theme/)

#### Form Rules - Composable

I added one composable for form rules. Add more here. You can even try integrating other validation packages like `yup` or `zod`

#### Yup & Vee-Validate

I will definitely be switching to vee-validate for dealing with forms.

#### Icons

The public folder contains a `favicon` & `icon`. Change these out for your app and be sure to tweak the pwa config inside the `nuxt.config` file to fit your app
