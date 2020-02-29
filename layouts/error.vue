<template>
  <div class="error">
    <div class="error__wrapper">
      <div class="error__title">
        Ошибка 404
      </div>
      <nuxt-link to="/">
        На главную
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.error__title {
  font-size: 30px;
}
</style>
