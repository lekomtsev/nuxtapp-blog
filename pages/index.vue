<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <app-post
        v-for="(post, i) in posts"
        :key="i"
        :post="post"
      />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post'

export default {
  components: {
    AppPost
  },

  async asyncData ({ store }) {
    const posts = await store.dispatch('post/fetch')
    return { posts }
  },

  mounted () {
    console.log('App running...')
  },

  head () {
    return {
      title: `Главная | ${process.env.appName}`
    }
  }
}
</script>
