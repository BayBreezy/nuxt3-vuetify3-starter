<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <VRow no-gutters align="center" justify="center">
          <VCol cols="12" md="6">
            <h1>會員登入</h1>
            <p class="text-medium-emphasis">請輸入您的帳號與密碼</p>

            <VForm @submit.prevent="submit" class="mt-7">
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="email">帳號</label>
                <VTextField :rules="[ruleRequired, ruleEmail]" v-model="email" prepend-inner-icon="fluent:mail-24-regular"
                  id="email" name="email" type="email" />
              </div>
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="password">密碼</label>
                <VTextField :rules="[ruleRequired, rulePassLen]" v-model="password"
                  prepend-inner-icon="fluent:password-20-regular" id="password" name="password" type="password" />
              </div>
              <div class="mt-5">
                <VBtn type="submit" block min-height="44" class="gradient primary">登入</VBtn>
              </div>
            </VForm>
            <p class="text-body-2 mt-10">
              <NuxtLink to="/" class="font-weight-bold text-primary">忘記密碼?</NuxtLink>
            </p>
            <p class="text-body-2 mt-4">
              <span>還不是會員?
                <NuxtLink to="/signup" class="font-weight-bold text-primary">點此註冊</NuxtLink>
              </span>
            </p>
          </VCol>
        </VRow>
      </VCol>
      <VCol class="hidden-md-and-down fill-height" md="6" lg="7">
        <VImg src="https://wallpaper.dog/large/5557744.jpg" cover
          class="h-100 rounded-xl d-flex align-center justify-center">
          <div class="text-center w-50 text-white mx-auto">
            <h2 class="mb-4">讓您在生活中擁有超人的力量</h2>
            <p>
              這個理念代表著我們的使命是提供一個平台，讓使用者可以輕鬆地找到需要幫助的任務。
            </p>
            <p>
              同時，我們也希望讓使用者感受到自己像超人一樣有能力去幫助別人解決問題，實現自我價值的提升。
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

const submit = async () => { };
</script>
