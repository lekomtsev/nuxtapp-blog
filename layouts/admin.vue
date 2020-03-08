<template>
  <el-container class="admin-page">
    <el-aside width="250px" class="sidebar">
      <app-aside />
    </el-aside>
    <el-container>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from '@/components/admin/Aside'

export default {
  components: { AppAside }
}
</script>

<style lang="scss" scoped>
  .admin-page {
    height: 100vh
  }

  .sidebar {
    height: 100%;
  }
</style>
