<template>
  <el-card class="comment">
    <div class="comment-header">
      <span class="comment__title">{{ comment.name }}</span>
      <span class="comment__date">
        <i class="el-icon-time" />
        {{ new Date(comment.date).toLocaleString() }}
      </span>
    </div>
    <div class="comment-text">
      <p>{{ comment.text }}</p>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
.comment {
  margin-bottom: 1rem;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.comment__title {
  font-size: 15px;
  font-weight: bold;
}

.comment__date {
  font-size: 12px;
}

.comment-text {
  white-space: pre-line;
}
</style>
