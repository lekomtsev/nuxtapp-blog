<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    style="max-width: 600px;"
    @submit.native.prevent="onSubmit"
  >
    <h2>{{ title }}</h2>
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
        Создать
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'admin-auth',

  data () {
    return {
      title: 'Создать пользователя',
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

            await this.$store.dispatch('auth/createUser', formData)
            this.$message.success('Новый пользователь добавлен')

            this.controls.login = ''
            this.controls.password = ''
            this.loading = false
          } catch (error) {
            this.loading = false
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>
