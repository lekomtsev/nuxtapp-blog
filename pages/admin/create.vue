<template>
  <div class="admin-wrapper">
    <el-form
      ref="form"
      enctype="multipart/form-data"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <h1>{{ title }}</h1>

      <el-form-item label="Введите название поста" prop="title">
        <el-input v-model="controls.title" />
      </el-form-item>
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          v-model="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>
      <el-button
        style="margin-bottom: 30px;"
        type="success"
        round
        plain
        @click="previewContent = true"
      >
        Предпросмотр
      </el-button>
      <el-dialog
        title="Предпросмотр"
        :visible.sync="previewContent"
        width="70%"
      >
        <vue-markdown :source="controls.text" />
      </el-dialog>
      <el-form-item>
        <el-upload
          ref="upload"
          style="margin-bottom: 21px;"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
          :on-change="handleImageChange"
        >
          <i class="el-icon-upload" />
          <div class="el-upload__text">
            Перетащите изображение <em>или нажмите</em>
          </div>
          <div slot="tip" class="el-upload__tip">
            Файлы с расширением jpg/png не более 500kb
          </div>
        </el-upload>
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
      title: 'Создать новый пост',
      image: null,
      previewContent: false,
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
        if (valid && this.image) {
          this.loading = true

          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          }

          try {
            await this.$store.dispatch('post/create', formData)
            this.controls.title = ''
            this.controls.text = ''
            this.image = null
            this.$refs.upload.clearFiles()
            this.$message.success('Пост успешно создан!')
          } catch (error) {} finally {
            this.loading = false
          }
        } else {
          this.$message.warning('Форма не валидна')
        }
      })
    },

    handleImageChange (file, fileList) {
      this.image = file.raw
    }
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss" scoped>

.admin-wrapper {
  max-width: 600px;
}

</style>
