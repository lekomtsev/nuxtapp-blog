<template>
  <el-container>
    <el-header>
      <h1>Аналитика по постам</h1>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="16">
          <canvas ref="canvas" />
        </el-col>
      </el-row>
      <el-row>
        <p>Новые данные</p>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  layout: 'admin',
  middleware: 'admin-auth',

  mounted () {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    }

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    this.renderChart(data, options)
  }
}
</script>

<style lang="scss" scoped>

.el-row {
  margin-bottom: 30px;
}

</style>
