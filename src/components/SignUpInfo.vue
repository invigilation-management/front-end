<template>
    <div>
        <div class="title3">武汉理工大学研究生招生考试监考人员报名表</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="184px" class="demo-ruleForm" label-position="left">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="所在单位" prop="unit">
                <el-input v-model="ruleForm.unit"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                    <el-radio v-model="ruleForm.gender" label="男"></el-radio>
                    <el-radio v-model="ruleForm.gender" label="女"></el-radio>
            </el-form-item>
            <el-form-item label="工号" prop="ID">
                <el-input v-model="ruleForm.ID"></el-input>
            </el-form-item>
            <el-form-item label="学历" prop="education">
                <el-select v-model="ruleForm.education" placeholder="请选择学历">
                    <el-option label="小学" value="小学"></el-option>
                    <el-option label="本科" value="本科"></el-option>
                    <el-option label="研究生" value="研究生"></el-option>
                    <el-option label="博士" value="博士"></el-option>
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
            <el-form-item label="意向校区" prop="school">
                <el-checkbox-group v-model="ruleForm.school" :max="1">
                    <el-checkbox  label="兴庆校区" name="school"></el-checkbox>
                    <el-checkbox  label="创新港" name="school"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="申请人承诺" prop="promise">
                <el-checkbox-group v-model="ruleForm.promise">
                    <el-checkbox label="本人自愿参加" name="promise"></el-checkbox>
                </el-checkbox-group>
                本人自愿参加研究生入学考试监考工作，认真学习掌握工作纪律要求，严格遵守《国家教育考试考务安全保密工作规定》，切实遵守监考工作守则，按照考务工作安排，完成监考工作。
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {getuserid, Agreeinfo} from '../api/office'
export default {
  name: 'SignUpInfo.vue',
  props: {
    parentValue: []
  },
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
        promise: true
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
    },
    show () {
      console.info(this.$props.parentValue)
      getuserid().then(res => {
        const userId = res.data.userId
        Agreeinfo(userId, this.$props.parentValue.trueFacultyId, this.$props.parentValue.batchName).then(res => {
          console.log(res.data.records)
          this.ruleForm.name = res.data.records[0].trueFacultyName
          this.ruleForm.unit = res.data.records[0].college
          if (res.data.records[0].gender === 0) {
            this.ruleForm.gender = '女'
          } else {
            this.ruleForm.gender = '男'
          }
          this.ruleForm.ID = res.data.records[0].trueFacultyId
          this.ruleForm.education = res.data.records[0].eduQualification
          this.ruleForm.tele = res.data.records[0].tele
          this.ruleForm.tele2 = res.data.records[0].teleBackup
          this.ruleForm.birth = res.data.records[0].birthday
          // this.ruleForm.imageUrl = res.data.records[0].avatar
          if (res.data.records[0].targetCampus === '兴庆校区') {
            this.ruleForm.school = ['兴庆校区']
          } else {
            this.ruleForm.school = ['创新港']
          }
          console.info(this.ruleForm.school[0])
        })
      })
    }
  },
  created () {
    this.show()
  }
}
</script>

<style scoped>
/deep/.el-breadcrumb{
    padding-top: 18px
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
