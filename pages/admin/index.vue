<template>
  <el-container>
    <el-header>
      <h1>Аналитика по постам</h1>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="16">
          <app-analytics-chart
            title="Количество просмотров"
            :labels="views.labels"
            :data="views.data"
          />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <app-analytics-chart
            title="Количество комментариев"
            :labels="comments.labels"
            :data="comments.data"
          />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import AppAnalyticsChart from '@/components/admin/AnalyticsChart'

export default {
  components: { AppAnalyticsChart },
  layout: 'admin',
  middleware: 'admin-auth',

  async asyncData ({ store }) {
    const { views, comments } = await store.dispatch('post/getAnalytics')
    return { views, comments }
  }
}
</script>

<style lang="scss" scoped>

.el-row {
  margin-bottom: 30px;
}

</style>
