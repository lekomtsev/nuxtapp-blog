<template>
  <el-table
    :data="allPosts"
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
        <span style="margin-left: 10px">
          {{ date | date('date') }}
        </span>
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
        <el-tooltip effect="dark" content="Редактировать пост" placement="top">
          <el-button
            icon="el-icon-edit"
            type="primary"
            @click="open(row._id)"
          />
        </el-tooltip>
        <el-tooltip effect="dark" content="Удалить пост" placement="top">
          <el-button
            icon="el-icon-delete"
            circle
            type="danger"
            @click="remove(row._id)"
          />
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'admin-auth',

  async asyncData ({ store }) {
    const posts = await store.dispatch('post/fetchAdmin')
    const allPosts = posts.data
    return { allPosts }
  },

  methods: {
    open (id) {
      this.$router.push(`/admin/post/${id}`)
    },

    async remove (id) {
      try {
        await this.$confirm('Удалить пост?', 'Внимание!', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отмена',
          type: 'warning'
        })

        await this.$store.dispatch('post/remove', id)
        this.allPosts = this.allPosts.filter(p => p._id !== id)
        this.$message.success('Пост удален')
      } catch (error) {}
    }
  },

  head () {
    return {
      title: 'Все посты и записи'
    }
  }
}
</script>
