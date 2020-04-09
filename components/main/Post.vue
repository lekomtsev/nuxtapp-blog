<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header slot="header" class="post__header">
      <h3>{{ post.title }}</h3>
      <small>
        <i class="el-icon-time" />
        {{ post.date | date('date') }}
      </small>
    </header>
    <div class="post__body">
      <img class="post__image" :src="post.imageUrl" :alt="post.title">
    </div>
    <footer class="post__footer">
      <el-button
        round
        @click="openPost"
      >
        Открыть статью
      </el-button>
      <span>
        <i class="el-icon-message" />
        {{ post.comments.length }}
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: null
    }
  },

  methods: {
    openPost () {
      const id = this.post._id
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
