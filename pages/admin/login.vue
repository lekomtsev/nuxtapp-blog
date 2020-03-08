<template>
  <el-card
    shadow="always"
    class="login"
  >
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <h2>Вход </h2>
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input
          v-model.trim="controls.password"
          type="password"
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
          Войти
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',
  data () {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Введите логин', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Введите пароль', trigger: 'blur' },
          { min: 6, message: 'Пароль должен быть минимум из 6 символов', trigger: 'blur' }
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

<style lang="scss">
  .login {
    width: 100%;
    max-width: 500px;
  }

  .login__button {
    margin-top: 21px;
    width: 100%;
  }

  .el-form-item {
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
