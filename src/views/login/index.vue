<template>
  <div class="login">
      <!-- 表单 -->
      <el-card class="login-card">
        <!-- 表单内容 -->
        <div class="title">
          <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <!-- 表单 -->
        <el-form>
          <!-- 表单容器 -->
          <el-form-item>
            <!-- 表单域 -->
            <el-input placeholder="请输入手机号"></el-input>
         </el-form-item>
          <el-form-item>
            <!-- 表单域  验证码-->
            <el-input style="width:60%" placeholder="请输入验证码"></el-input>
            <!-- 防置按钮 -->
            <el-button style="float: right" plain>发送验证码</el-button>
          </el-form-item>
          <el-form-item>
            <!-- 表单域 勾选-->
            <el-checkbox>我已阅读用户协议和隐私条款</el-checkbox>
         </el-form-item>
         <el-form-item>
            <!-- 表单域 -->
             <el-button style="width:100%" type="primary">登录</el-button>
         </el-form-item>
       </el-form>
      </el-card>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.login {
  background-image: url('../../assets/img/login_bg.jpg');
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 440px;
    height: 340px;
    .title {
      text-align: center;
      img {
        height: 40px;
      }
    }

  }
}
</style>
