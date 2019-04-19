<!-- login -->
<template>
  <div class="login">
    <el-form
      :model="loginForm"
      ref="loginForm"
      label-width="100px"
      class="login-form"
    >
      <el-form-item
        prop="username"
        label="用户名"
        :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ]"
      >
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item
        prop="passwd"
        label="密码"
        :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' }
    ]"
      >
        <el-input v-model="loginForm.passwd" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
        loginForm: {
          username: '',
          passwd: ''
        }
    };
  },
  components: {},
  computed: {},
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!');
            const username = this.loginForm.username;
            const passwd = this.loginForm.passwd;
            let token = Math.floor(Math.random() * 10000);
            token = this.$md5(username + token + passwd);
            const user = {
              username,
              passwd: this.$md5(passwd)
            }
            this.$store.commit('SET_TOKEN', token);
            this.$store.commit('SET_USER', JSON.stringify(user));
            this.loginRoute();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      loginRoute(){
        const { params: { back } } = this.$route;
        const route = back || { name: 'home' };
        const { name, params, query } = route;
        this.$router.replace({ name, params, query });
      }
  },
  mounted() {
    
  }
};
</script>
<style lang='scss' scoped>
</style>