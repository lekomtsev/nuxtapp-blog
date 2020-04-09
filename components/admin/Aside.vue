<template>
  <el-menu
    router
    :default-active="$route.path"
    class="sidebar__menu"
  >
    <el-menu-item index="/">
      <i class="el-icon-location" />
      <span>На главную</span>
    </el-menu-item>
    <el-menu-item index="/admin">
      <i class="el-icon-location" />
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit" />
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-document" />
      <span>Посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-service" />
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-setting" />
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
  .sidebar__menu {
    height: 100%;
  }
</style>
