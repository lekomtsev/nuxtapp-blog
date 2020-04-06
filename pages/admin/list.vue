<template>
  <el-table
    :data="posts"
    style="width: 100%"
  >
    <el-table-column
      prop="title"
      label="Название"
    />
    <el-table-column
      label="Дата"
      width="200"
    >
      <template slot-scope="{ row: { date } }">
        <i class="el-icon-time" />
        <span style="margin-left: 10px">{{ new Date(date).toLocaleString() }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Просмотры"
    >
      <template slot-scope="{ row: { views } }">
        <i class="el-icon-view" />
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Комментарии"
    >
      <template slot-scope="{ row: { comments } }">
        <i class="el-icon-message" />
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Действия"
    >
      <template slot-scope="{ row }">
        <el-button
          icon="el-icon-edit"
          type="primary"
          @click="open(row._id)"
        />
        <el-button
          icon="el-icon-delete"
          circle
          type="danger"
          @click="remove(row._id)"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'admin-auth',

  asyncData ({ store }) {
    // const posts = await store.dispatch('post/fetchAdmin')
    const posts = [
      { title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: Math.random() },
      { title: 'Post 2', date: new Date(), views: 2, comments: [1, 2, 3, 4], _id: Math.random() },
      { title: 'Post 3', date: new Date(), views: 33, comments: [1, 2, 3], _id: Math.random() }
    ]
    return { posts }
  },

  data () {
    return {
      // posts: ''
    }
  },

  methods: {
    open (id) {
      console.log('open', id)
    },
    remove (id) {
      console.log('remove', id)
    }
  }
}
</script>
