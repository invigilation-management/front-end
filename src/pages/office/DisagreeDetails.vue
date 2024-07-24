<template>
    <div>
        <div class="head"><el-breadcrumb separator="/" >
            <el-breadcrumb-item :to="{ path: 'approval/agree-details' }"><span class="title1"><i class="el-icon-back"></i> | 报名审批</span></el-breadcrumb-item>
            <el-breadcrumb-item><span class="title2">审批详情</span></el-breadcrumb-item>
        </el-breadcrumb></div>
        <el-row :gutter="30">
            <el-col :span="14">
                <el-card class="detail" style="height: 940px; wight: 1034px">
                    <div class="title3">报名详情</div>
                    <div class="formtable">
                        <span class="word1">姓名: </span>
                        <span class="word2">{{ Form.name }}</span>
                    </div>
                    <div class="formtable">
                        <span class="word1">报名结果: </span>
                        <span class="word2" style="color: #E33737">{{ Form.result }}</span>
                    </div>
                    <div class="formtable">
                        <span class="word1">所在单位: </span>
                        <span class="word2">{{ Form.unit }}</span>
                    </div>
                    <div class="formtable">
                        <span class="word1">性别: </span>
                        <span class="word2">{{ Form.gender }}</span>
                    </div>
                    <div class="formtable">
                        <span class="word1">工号: </span>
                        <span class="word2">{{ Form.ID }}</span>
                    </div>
                    <div class="formtable">
                        <span class="word1">学历: </span>
                        <span class="word2">{{ Form.education }}</span>
                    </div>
                    <div class="formtable">
                        <span class="word1">联系电话: </span>
                        <span class="word2">{{ Form.tele }}</span>
                    </div>
                    <div class="formtable">
                        <span class="word1">备用电话: </span>
                        <span class="word2">{{ Form.tele2 }}</span>
                    </div>
                    <div class="formtable" style="height: 130px">
                        <span class="word1">电子照片: </span>
                        <img src="../../assets/images/avatar.png" class="thisimg" style="vertical-align: top">
                    </div>
                    <div class="formtable">
                        <span class="word1">监考校区: </span>
                        <span class="word2">{{ Form.school }}</span>
                    </div>
                    <div class="formtable" style="margin-bottom: 5px">
                        <span class="word1">申请人承诺: </span>
                        <span class="word2">{{ Form.promise }}</span>
                    </div>
                    <div class="word3">本人自愿参加研究生入学考试监考工作，认真学习掌握工作纪律要求，严格遵守《国家教育考试考务安全保密工作规定》，切实遵守监考工作守则，按照考务工作安排，完成监考工作。</div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="timeline" style="height: 940px; width: 566px">
                    <HistoryCard></HistoryCard>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import SignUpInfo from '../../components/SignUpInfo.vue'
import HistoryCard from '../../components/HistoryCard.vue'
import {getuserid, Agreeinfo} from '../../api/office'
export default {
  name: 'DisagreeDetails',
  props: ['batchName', 'trueFacultyId'],
  data () {
    return {
      Form: {
        name: '',
        result: '',
        unit: '',
        gender: '男',
        ID: '',
        education: '',
        tele: '',
        tele2: '',
        birth: '',
        imageUrl: '',
        school: '',
        promise: ''
      }
    }
  },
  methods: {
    show () {
      getuserid().then(res => {
        const userId = res.data.userId
        console.log('userId:', userId)
        console.log(this.$props.trueFacultyId)
        console.log(this.$props.batchName)
        Agreeinfo(userId, this.$props.trueFacultyId, this.$props.batchName).then(res => {
          console.log('kaishi')
          console.log(res.data.records)
          console.log('jieshu')
          this.Form.name = res.data.records[0].trueFacultyName
          this.Form.result = '不同意'
          this.Form.unit = res.data.records[0].college
          if (res.data.records[0].gender === 0) {
            this.Form.gender = '女'
          }
          this.Form.ID = res.data.records[0].trueFacultyId
          this.Form.education = res.data.records[0].eduQualification
          this.Form.tele = res.data.records[0].tele
          this.Form.tele2 = res.data.records[0].teleBackup
          this.Form.imageUrl = res.data.records[0].avatar
          this.Form.school = res.data.records[0].targetCampus
        })
      })
    }
  },
  created () {
    this.show()
  },
  components: {HistoryCard, SignUpInfo}}
</script>

<style scoped>
.head{
    width: 250px;
    height: 64px;
}
/deep/.el-breadcrumb{
    padding-top: 18px
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
    margin-left: 32px;
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
.formtable{
    width: 307px;
    height: 22px;
    margin-bottom: 16px;
    margin-left: 24px;
}
.word1{
    color: #191919;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: left;
}
.word2{
    color: #191919b3;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: left;
}
.word3{
    width: 444px;
    height: 60px;
    font-weight: 400;
    font-size: 12px;
    color: #00000099;
    line-height: 20px;
    margin-left: 112px;
}
.thisimg{
    width: 120px;
    height: 130px;
}
</style>
