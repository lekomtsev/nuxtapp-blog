<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header slot="header" class="post__header">
      <h3>
        Post title
      </h3>
      <small>
        <i class="el-icon-time" />
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post__body">
      <img class="post__image" src="https://www.1obl.ru/upload/iblock/3d4/berlin.png" alt="alt">
    </div>
    <footer class="post__footer">
      <el-button round @click="openPost">
        Открыть статью
      </el-button>
      <span>
        <i class="el-icon-message" />
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost () {
      const id = 'test-id'
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  // height: 350px;
  margin-bottom: 2rem;
  overflow: hidden;

  img {
    max-width: 100%;
  }
}

.post__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
}
</style>
