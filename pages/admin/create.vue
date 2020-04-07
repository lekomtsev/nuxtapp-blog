<template>
  <div class="admin-wrapper">
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <h1>Создать новый пост</h1>

      <el-form-item label="Введите название поста" prop="title">
        <el-input
          v-model.trim="controls.title"
        />
      </el-form-item>
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          v-model.trim="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          native-type="submit"
          type="primary"
          round
          class="login__button"
        >
          Создать пост
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'admin-auth',

  data () {
    return {
      loading: false,
      controls: {
        title: '',
        text: ''
      },
      rules: {
        title: [
          { required: true, message: 'Заголовок поста не должен быть пустым', trigger: 'blur' }
        ],
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
            title: this.controls.title,
            text: this.controls.text
          }

          try {
            await this.$store.dispatch('post/create', formData)
            this.controls.title = ''
            this.controls.text = ''
            this.$message.success('Пост успешно создан!')
          } catch (error) {} finally {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.admin-wrapper {
  max-width: 600px;
}

</style>
