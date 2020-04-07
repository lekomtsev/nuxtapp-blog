<template>
  <div class="post-wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/admin/post">
        Посты
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <!--<h2>Вход </h2>-->
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          v-model.trim="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>
      <el-form-item>
        <small style="margin-right: 30px;">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ new Date(post.date).toLocaleString() }}</span>
        </small>
        <small>
          <i class="el-icon-view" />
          <span style="margin-left: 10px">{{ post.views }}</span>
        </small>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          native-type="submit"
          type="primary"
          round
          class="login__button"
        >
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'admin-auth',

  validate ({ params }) {
    return !!params.id
  },

  async asyncData ({ store, params }) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return { post }
  },

  data () {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Поле не должно быть пустое', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    onSubmit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          const formData = {
            text: this.controls.text,
            id: this.post._id
          }

          try {
            await this.$store.dispatch('post/update', formData)
            this.$message.success('Пост обновлен')
            this.loading = false
          } catch (error) {
            this.loading = false
          }
        }
      })
    }
  },

  head () {
    return {
      title: `Пост | ${this.post.title}`
    }
  }
}
</script>

<style lang="scss" scoped>

.post-wrapper {
  max-width: 600px;

  .el-breadcrumb {
    margin-bottom: 30px;
  }
}

</style>
