<template>
  <nav class="nav">
    <h1 class="nav__title">
      <a href="/">SSR blog</a>
    </h1>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #47494e;

  &__title {
    margin: 0;
    color: indianred;
  }
}

</style>
