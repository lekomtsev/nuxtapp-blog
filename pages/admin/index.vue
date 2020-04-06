<template>
  <p>Welcome to admin page</p>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'admin-auth'
}
</script>
