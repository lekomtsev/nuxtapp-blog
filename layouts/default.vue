<template>
  <el-container>
    <el-header class="header">
      <app-navigation />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
import AppNavigation from '@/components/main/Navigation'

export default {
  components: {
    AppNavigation
  }
}

</script>

<style lang="scss">

  .header {
    height: auto !important;
  }

</style>
