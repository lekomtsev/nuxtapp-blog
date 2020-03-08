<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="14">
      <article class="post">
        <header class="post__header">
          <div class="post__title">
            <h1>Post title</h1>
            <nuxt-link to="/">
              <i class="el-icon-back" />
              На главную
            </nuxt-link>
          </div>
          <div class="post__info">
            <small>
              <i class="el-icon-time" />
              {{ new Date().toLocaleString() }}
            </small>
            <small>
              <i class="el-icon-view" />
              42
            </small>
          </div>
        </header>
        <main class="post__content">
          <img class="post__image" src="https://www.1obl.ru/upload/iblock/3d4/berlin.png" alt="alt">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, molestiae?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, molestiae?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, molestiae?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, molestiae?</p>
        </main>
        <footer>
          <div v-if="true" class="comments comments--exist">
            <app-comment
              v-for="comment in 4"
              :key="comment"
              :comment="comment"
            />
          </div>
          <div v-else class="comments comments--none">
            <p>Комментариев нет</p>
          </div>
          <app-comment-form
            v-if="canAddComment"
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
  data () {
    return {
      canAddComment: true
    }
  },
  methods: {
    createCommentHandler () {
      this.canAddComment = false
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  padding-top: 21px;
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
</style>
