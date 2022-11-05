<template>
	<VContainer fluid class="fill-height">
		<VRow no-gutters align="center" justify="center" class="fill-height">
			<VCol cols="12" md="6" lg="5" sm="6">
				<VRow no-gutters align="center" justify="center">
					<VCol cols="12" md="6">
						<h1>Sign In</h1>
						<p class="text-medium-emphasis">Enter your details to get started</p>

						<VForm @submit.prevent="submit" class="mt-7">
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="email">Email</label>
								<VTextField
									:rules="[ruleRequired, ruleEmail]"
									v-model="email"
									prepend-inner-icon="fluent:mail-24-regular"
									id="email"
									name="email"
									type="email"
								/>
							</div>
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="password">Password</label>
								<VTextField
									:rules="[ruleRequired, rulePassLen]"
									v-model="password"
									prepend-inner-icon="fluent:password-20-regular"
									id="password"
									name="password"
									type="password"
								/>
							</div>
							<div class="mt-5">
								<VBtn type="submit" block min-height="44" class="gradient primary">Sign In</VBtn>
							</div>
						</VForm>
						<p class="text-center text-caption mt-10">
							<span
								>Don't have an account?
								<NuxtLink to="/signup" class="font-weight-bold text-primary"
									>Sign Up</NuxtLink
								></span
							>
						</p>
					</VCol>
				</VRow>
			</VCol>
			<VCol class="hidden-md-and-down fill-height" md="6" lg="7">
				<VImg
					src="https://wallpaper.dog/large/5557744.jpg"
					cover
					class="h-100 rounded-xl d-flex align-center justify-center"
				>
					<div class="text-center w-50 text-white mx-auto">
						<h2 class="mb-4">Start your journey today</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore quia.
							Dolorum dolores ad ipsum voluptatum rem, hic placeat, odio, odit numquam quod
							veritatis accusantium assumenda! Sequi, provident in! Iure!
						</p>
					</div>
				</VImg>
			</VCol>
		</VRow>
	</VContainer>
</template>

<script setup>
	const email = ref("");
	const password = ref("");

	const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

	const submit = async () => {};
</script>
