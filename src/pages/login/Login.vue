<template>
    <!-- 整体背景 -->
    <div class="login-wrap">
        <!-- 输入框 -->
        <div class="form-wrapper">
            <div class="header">
                想要进来看看吗
            </div>
            <div class="input-wrapper">
                <div class="border-wrapper">
                    <input type="text" name="username" placeholder="用户名" v-model="username" class="border-item" autocomplete="off" />
                </div>
                <div class="border-wrapper">
                    <input type="password" name="password" placeholder="密码" v-model="password" class="border-item" autocomplete="off" />
                </div>
            </div>
            <div class="action">
                <div class="btn" @click="handleLogin">登录</div>
            </div>
            <div class="additional-actions">
                <router-link to="/register" class="register-link">注册</router-link>
                <router-link to="/forgot-password" class="forgot-password-link">忘记密码？</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      // 角色类型: 1 - 研公办主任/综合办主任/副院长, 2 - 研究生招生考务科科长, 3 - 在职在岗教职工
      const roleType = this.getRoleByUsername(this.username)
      switch (roleType) {
        case 1:
          this.$router.push('/office/fill-info')
          break
        case 2:
          this.$router.push({path: '/admissions/batch-details'})
          break
        case 3:
          this.$router.push('/teacher/exam-signup-passed')
          break
        default:
          alert('未知角色')
          break
      }
    },
    getRoleByUsername (username) {
      // 模拟根据用户名获取角色，实际应用中应替换为API调用
      // const userRoleMap = {
      //   'user1': 1,
      //   'user2': 2,
      //   'user3': 3
      // }
      // return userRoleMap[username] || 1 || 2 || 3// 默认返回0表示未知角色
      return 2
    }
  }
}
</script>

<style scoped>
.login-wrap {
    height: 100%;
    font-family: JetBrains Mono Medium;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #0e92b3; */
    background: url('../../assets/images/img.png');
    background-size: 100% 100%;
}

.form-wrapper {
    width: 300px;
    background-color: rgba(41, 45, 62, 0.8);
    color: #fff;
    border-radius: 2px;
    padding: 50px;
}

.form-wrapper .header {
    text-align: center;
    font-size: 35px;
    text-transform: uppercase;
    line-height: 100px;
}

.form-wrapper .input-wrapper input {
    background-color: rgb(41, 45, 62);
    border: 0;
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: #fff;
    outline: none;
}

.form-wrapper .input-wrapper input::placeholder {
    text-transform: uppercase;
}

.form-wrapper .input-wrapper .border-wrapper {
    background-image: linear-gradient(to right, #e8198b, #0eb4dd);
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-wrapper .input-wrapper .border-wrapper .border-item {
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    border-radius: 30px;
}

.form-wrapper .action {
    display: flex;
    justify-content: center;
}

.form-wrapper .action .btn {
    width: 60%;
    text-transform: uppercase;
    border: 2px solid #0e92b3;
    text-align: center;
    line-height: 50px;
    border-radius: 30px;
    cursor: pointer;
}

.form-wrapper .action .btn:hover {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.form-wrapper .additional-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.form-wrapper .additional-actions a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
}

.form-wrapper .additional-actions a:hover {
    text-decoration: underline;
}

.form-wrapper .icon-wrapper {
    text-align: center;
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    border-top: 1px dashed rgb(146, 146, 146);
    padding: 20px;
}

.form-wrapper .icon-wrapper i {
    font-size: 20px;
    color: rgb(187, 187, 187);
    cursor: pointer;
    border: 1px solid #fff;
    padding: 5px;
    border-radius: 20px;
}

.form-wrapper .icon-wrapper i:hover {
    background-color: #0e92b3;
}
</style>
