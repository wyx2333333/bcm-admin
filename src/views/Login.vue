<template>
  <el-scrollbar style="height: 100%;">
    <el-row type="flex"
            class="row-bg mg-top100"
            justify="center"
            align="middle">
      <div class="login-wrap">
        <div class="login-title">用户登录</div>
        <el-form status-icon
                 :model="loginForm"
                 ref="loginForm"
                 label-width="60px">
          <el-form-item prop="user"
                        :rules="$validateRules({ required: true, requiredItem: '用户名' })">
            <el-input placeholder="请输入用户名"
                      v-model="loginForm.user"></el-input>
          </el-form-item>
          <el-form-item prop="password"
                        :rules="$validateRules({ required: true, requiredItem: '密码' })">
            <el-input type="password"
                      placeholder="请输入密码"
                      v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       :loading="isLogining"
                       @click="login('loginForm')">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="reset('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-row>
  </el-scrollbar>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      loginForm: {
        user: "admin",
        password: "admin"
      },
      isLogining: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isLogining = true;
          setTimeout(() => {
            this.isLogining = false;
            sessionStorage.setItem("user", this.loginForm.user);
            sessionStorage.setItem("password", this.loginForm.password);
            this.$router.push({
              path: "/main"
            });
            this.$message({
              message: "登陆成功！",
              duration: 1200,
              type: "success"
            });
          }, 1200);
        } else {
          console.error("error submit!!");
          return false;
        }
      });
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
.mg-top100 {
  margin-top: 10%;
}
.login-wrap {
  width: 350px;
  padding: 10px 30px;
  margin: 30px;
  border-radius: 5px;
  background: $white;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .login-title {
    color: $text-2;
    font-size: 20px;
    font-weight: 600;
    margin: 30px auto;
    text-align: center;
  }
  .el-form-item__content {
    margin-left: 0 !important;
  }
  .el-button {
    width: 100%;
  }
}
</style>
