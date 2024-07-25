<template>
    <div class="login-wrap">
        <div class="form-wrapper">
            <div class="header">
                监考管理系统
            </div>
            <div class="input-wrapper">
                <div class="border-wrapper">
                    <input type="text" name="username" placeholder="用户名" v-model="username" class="border-item" autocomplete="off" />
                </div>
                <div class="border-wrapper">
                    <input type="password" name="password" placeholder="密码" v-model="password" class="border-item" autocomplete="off" />
                </div>
                <div class="border-wrapper">
                    <input type="text" name="captcha" placeholder="验证码" v-model="captchaInput" class="border-item captcha-input" autocomplete="off" @focus="showCaptchaDialog" readonly/>
                </div>
            </div>
            <div class="action">
                <div class="btn" @click="handleLogin">登录</div>
            </div>
            <div class="additional-actions">
                <el-button @click="toregister" type="text">注册</el-button>
                <el-button @click="tofoeget" type="text">忘记密码？</el-button>
            </div>
        </div>
        <el-dialog title="请输入验证码" :visible.sync="dialogVisible" @open="generateCaptcha">
            <div class="captcha-dialog-content">
                <canvas ref="captchaCanvas" class="captcha-img" width="200" height="50" @click="generateCaptcha"></canvas>
                <div class="captcha-input-wrapper">
                    <el-input v-model="dialogCaptchaInput" placeholder="请输入验证码"></el-input>
                </div>
                <span>点击验证码图片以刷新</span>
                <img src="../../assets/images/xjtu.png" class="school-badge" >
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="confirmCaptcha">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { getLogin } from '@api/user'

export default {
  data () {
    return {
      username: '',
      password: '',
      captcha: '',
      captchaInput: '',
      dialogCaptchaInput: '',
      dialogVisible: false
    }
  },
  methods: {
    toregister () {
      this.$router.push({
        name: 'register'
      })
    },
    tofoeget () {
      this.$router.push({
        name: 'register'
      })
    },
    handleLogin () {
      if (this.captcha.toLowerCase() !== this.captchaInput.toLowerCase()) {
        this.$message({
          message: '验证码错误',
          type: 'error'
        })
        this.generateCaptcha()
        return
      }
      this.getRoleByUsername(this.username)
    },
    getRoleByUsername (username) {
      let obj = {
        userId: this.username,
        password: this.password
      }
      getLogin(obj).then(res => {
        if (res.data != null) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          switch (res.data.faculty.level) {
            case 1:
              this.$router.push('/office/approval')
              break
            case 2:
              this.$router.push({path: '/admissions/exam-approval/agree'})
              break
            case 3:
              this.$router.push('/teacher/fill-form')
              break
            case 4:
              this.$router.push('/office/approval')
              break
            case 5:
              this.$router.push('/office/approval')
              break
            default:
              alert('未知角色')
              break
          }
        } else {
          this.$message({
            message: '用户名或密码错误',
            type: 'warning'
          })
        }
      })
    },
    generateCaptcha () {
      const canvas = this.$refs.captchaCanvas
      const ctx = canvas.getContext('2d')
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let captcha = ''
      for (let i = 0; i < 6; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)]
      }
      this.captcha = captcha
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#fff' // 设置背景颜色为白色
      ctx.fillRect(0, 0, canvas.width, canvas.height) // 填充背景颜色
      ctx.font = '28px Arial'
      ctx.fillStyle = '#000'
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      ctx.fillText(captcha, canvas.width / 2, canvas.height / 2) // 调整验证码的绘制位置
    },
    showCaptchaDialog () {
      this.dialogVisible = true
      this.generateCaptcha()
    },
    confirmCaptcha () {
      if (this.dialogCaptchaInput.toLowerCase() === this.captcha.toLowerCase()) {
        this.captchaInput = this.dialogCaptchaInput
        this.dialogVisible = false
      } else {
        this.$message({
          message: '验证码错误',
          type: 'error'
        })
        this.generateCaptcha()
      }
    }
  },
  mounted () {
    this.generateCaptcha()
  }
}
</script>

<style scoped>
.login-wrap {
    height: 100vh;
    width: 100vw;
    font-family: JetBrains Mono Medium;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../assets/images/bbbggg.png') no-repeat center center fixed;
    background-size: cover;
}

.form-wrapper {
    width: 300px;
    background-color: rgba(194, 207, 213, 0.55); /* 增加不透明度 */
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
    background-color: rgba(255, 255, 255, 0.15); /* 设置输入框背景为半透明 */
    border: 2px solid rgba(255, 255, 255, 0.5); /* 半透明白色边框 */
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #fff;
    outline: none;
    border-radius: 15px; /* 增加圆角 */
    padding: 5px;
    margin-bottom: 20px; /* 增加输入框之间的间距 */
}

.form-wrapper .input-wrapper input::placeholder {
    text-transform: uppercase;
    color: #fffffffa; /* 调整placeholder颜色 */
}

.form-wrapper .input-wrapper .border-wrapper {
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

.captcha-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.captcha-input {
    width: 100%;
}

.form-wrapper .action {
    display: flex;
    justify-content: center;
}
.form-wrapper .action .btn {
    width: 60%;
    text-transform: uppercase;
    border: 2px solid #ffffffcc; /* 调整边框颜色 */
    text-align: center;
    line-height: 50px;
    border-radius: 25px; /* 增加圆角 */
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    transition: background-color 0.3s;
    background-color: rgba(41, 45, 62, 0.7); /* 确保背景透明 */
}

.form-wrapper .action .btn:hover {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    border-color: transparent; /* 确保边框颜色透明 */
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

.captcha-input-wrapper {
    width: 200px;
    margin-top: 10px;
}

.captcha-img {
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 10px;
}

.captcha-dialog-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.school-badge {
    position: absolute;
    bottom: 0px;
    left: 100px;
    width: 100px;
    height: 100px;
}

.el-dialog__header {
    background-color: rgba(41, 45, 62, 0.8); /* 与主页背景颜色一致 */
    color: #fff; /* 与主页文字颜色一致 */
    border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* 分隔线颜色 */
}

.el-dialog {
    border-radius: 10px; /* 圆角 */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* 阴影效果 */
}

.el-dialog__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(41, 45, 62, 0.8); /* 与主页背景颜色一致 */
}

.el-dialog__footer {
    display: flex;
    justify-content: center;
    background-color: rgba(41, 45, 62, 0.8); /* 与主页背景颜色一致 */
    border-top: 1px solid rgba(255, 255, 255, 0.2); /* 分隔线颜色 */
    padding: 10px 20px;
}

.el-input {
    width: 200px;
}

.el-button--primary {
    background-color: #0e92b3;
    border-color: #0e92b3;
    color: #fff;
}

.el-button--primary:hover {
    background-color: #0c7aa1;
    border-color: #0c7aa1;
}

span {
    margin-top: 10px;
    color: #bbb; /* 与主页文字颜色一致 */
}

</style>
