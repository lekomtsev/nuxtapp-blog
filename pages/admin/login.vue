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
    onSubmit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }

            await this.$store.dispatch('auth/login', formData)
            await this.$router.push('/admin')
            this.loading = false
          } catch (error) {
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
