<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >
    <h2>Добавить комментарий</h2>
    <el-form-item label="Имя" prop="name">
      <el-input v-model.trim="controls.name" />
    </el-form-item>
    <el-form-item label="Текст комментария" prop="text">
      <el-input
        v-model.trim="controls.text"
        type="textarea"
        resize="none"
        :col="2"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        :loading="loading"
        native-type="submit"
        type="primary"
        round
      >
        Добавить комментарий
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Введите ваш комментарий', trigger: 'blur' },
          { min: 10, max: 250, message: 'Комментарий должен быть минимум из 10 и не более 250 символов', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (form) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true

          // const formData = {
          //   name: this.controls.name,
          //   text: this.controls.text,
          //   postId: ''
          // }

          try {
            setTimeout(() => {
              this.$emit('created')
              this.$message.success('Комментарий добавлен')
            }, 1000)
          } catch (e) {
            console.log(e)
            this.loading = false
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
