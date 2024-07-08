<template>
    <div>
        <div class="head"><el-breadcrumb separator="/" >
            <el-breadcrumb-item :to="{ path: 'approval/agree-details' }"><span class="title1"><i class="el-icon-back"></i> | 首页</span></el-breadcrumb-item>
            <el-breadcrumb-item><span class="title2">活动管理</span></el-breadcrumb-item>
        </el-breadcrumb></div>
        <el-card class="box-card">
            <div class="title3">武汉理工大学研究生招生考试监考人员报名表</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="184px" class="demo-ruleForm" label-position="left">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="所在单位" prop="unit">
                    <el-input v-model="ruleForm.unit"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-radio-group v-model="ruleForm.gender">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="工号" prop="ID">
                    <el-input v-model="ruleForm.ID"></el-input>
                </el-form-item>
                <el-form-item label="学历" prop="education">
                    <el-select v-model="ruleForm.education" placeholder="请选择学历">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="联系电话" prop="tele">
                    <el-input v-model="ruleForm.tele"></el-input>
                </el-form-item>
                <el-form-item label="备用电话" prop="tele2">
                    <el-input v-model="ruleForm.tele2"></el-input>
                </el-form-item>
                <el-form-item label="出生年月" prop="birth">
                    <el-date-picker v-model="ruleForm.birth" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="上传电子照片" prop="picture">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="校区" prop="school">
                    <el-checkbox-group v-model="ruleForm.school" :max="1">
                        <el-checkbox label="清水河校区" name="school"></el-checkbox>
                        <el-checkbox label="长菱校区" name="school"></el-checkbox>
                        <el-checkbox label="服从调剂" name="school"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="申请人承诺" prop="promise">
                    <el-checkbox-group v-model="ruleForm.promise">
                        <el-checkbox label="本人自愿参加" name="promise"></el-checkbox>
                    </el-checkbox-group>
                    本人自愿参加研究生入学考试监考工作，认真学习掌握工作纪律要求，严格遵守《国家教育考试考务安全保密工作规定》，切实遵守监考工作守则，按照考务工作安排，完成监考工作。
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'ApprovalDetails',
  data () {
    return {
      ruleForm: {
        name: '',
        unit: '',
        gender: '',
        ID: '',
        education: '',
        tele: '',
        tele2: '',
        birth: '',
        imageUrl: '',
        school: [],
        promise: ''
      }
    }
  },
  rules: {
    name: [
      { required: true, message: '请输入活动名称', trigger: 'blur' }
    ]
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped>
.head{
    width: 217px;
    height: 64px;
}
/deep/.el-breadcrumb{
    padding-top: 18px
}

.box-card {
    width: 1034px;
    height: 860px;
    background: #FFFFFF;
    margin-left: 24px;
}
.title1{
    color: #00000066;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: right;
}
.title2{
    color: #000000e6;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: right;
}

.title3{
    width: 371px;
    height: 22px;
    font-weight: 500;
    font-size: 16px;
    color: #171717;
    text-align: left;
    line-height: 22px;
    padding-bottom: 24px;
}
.el-input{
    width: 430px;
    height: 36px;
    background: #c5c5c559;
    border: 1px solid #DCDCDC;
    border-radius: 3px;
}
.el-form-item__label{
    color: rgba(21, 20, 20, 0.9);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: left;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
.el-form-item{
    margin-bottom: 16px;
}
</style>
