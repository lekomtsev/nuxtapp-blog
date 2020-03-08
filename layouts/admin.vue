<template>
  <el-container :class="'admin-page'">
    <el-aside width="200px">
      Aside
    </el-aside>
    <el-container>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.admin-page {
  height: 100vh
}
</style>
