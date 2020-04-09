<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="14">
      <article class="post">
        <header class="post__header">
          <div class="post__title">
            <h1>{{ post.title }}</h1>
            <nuxt-link to="/">
              <i class="el-icon-back" />
              На главную
            </nuxt-link>
          </div>
          <div class="post__info">
            <small>
              <i class="el-icon-time" />
              {{ new Date(post.date).toLocaleString() }}
            </small>
            <small>
              <i class="el-icon-view" />
              {{ post.views }}
            </small>
          </div>
        </header>
        <main class="post__content">
          <img
            class="post__image"
            :src="post.imageUrl"
            :alt="post.title"
          >
          <vue-markdown :source="post.text" />
        </main>
        <footer>
          <div v-if="post.comments.length" class="comments comments--exist">
            <app-comment
              v-for="(comment, i) in post.comments"
              :key="i"
              :comment="comment"
            />
          </div>
          <div v-else class="comments comments--none">
            <p>Комментариев нет</p>
          </div>
          <app-comment-form
            v-if="canAddComment"
            :post-id="post._id"
            @created="createCommentHandler"
          />
        </footer>
      </article>
    </el-col>
  </el-row>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'

export default {
  components: {
    AppComment, AppCommentForm
  },

  validate ({ params }) {
    return Boolean(params.id)
  },

  async asyncData ({ store, params }) {
    const post = await store.dispatch('post/fetchById', params.id)
    await store.dispatch('post/addView', post)
    return {
      post: { ...post, views: ++post.views }
    }
  },

  data () {
    return {
      canAddComment: true
    }
  },

  methods: {
    createCommentHandler (comment) {
      this.post.comments.unshift(comment)
      this.canAddComment = false
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  margin-top: 30px;
}

.post__header {
  margin-bottom: 30px;
}

.post__title {
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post__image {
  display: block;
  margin: 0 auto 21px;
  border-radius: 3px;
  max-width: 100%;
}

.post__content {
  p + p {
    margin-top: 12px;
  }
}

.el-form {
  margin-top: 40px;
}
</style>
