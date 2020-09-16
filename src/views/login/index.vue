<template>
  <div class="login_wrap">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="login_form"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input size="small" style="width:250px" type="userName" v-model="loginForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
        <el-input size="small" style="width:250px" type="password" v-model="loginForm.passWord" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button size="small" @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Login extends Vue {
    private loginForm: { [propsName: string]: any } = {
    userName: '',
    passWord: '',
    }
    private rules: { [propsName: string]: any } = {
    userName: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    passWord: [
        { required: true, message: '请输入用户密码', trigger: 'blur' }
    ]
    }
    private submitForm(formName: string): void{
        
        (this.$refs[formName]  as any).validate((valid: boolean) => {
          if (valid) {
            // alert('submit!');
            sessionStorage.setItem('userInfo', JSON.stringify(this.loginForm))
            this.$router.push('/form/formInline')
            this.$message({
                message: '恭喜你，登录成功',
                type: 'success'
                });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
}
</script>

<style lang="less" scoped>
.login_wrap{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .login_form {
        width: 500px;
        height: 200px;
        padding: 40px 20px;
        background-color: #f9f9f9;
        border-radius: 5px;
    }
}

</style>