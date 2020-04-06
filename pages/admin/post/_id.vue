<template>
  <div class="">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/admin/post">
        Посты
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ $route.params.id }}</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>Post {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'admin-auth'
}
</script>
