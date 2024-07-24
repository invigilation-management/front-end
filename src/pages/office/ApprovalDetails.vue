<template>
    <div>
        <div class="head"><el-breadcrumb separator="/" >
            <el-breadcrumb-item :to="{ path: 'approval/agree-details' }"><span class="title1"><i class="el-icon-back"></i> | 首页</span></el-breadcrumb-item>
            <el-breadcrumb-item><span class="title2">活动管理</span></el-breadcrumb-item>
        </el-breadcrumb></div>
        <el-row :gutter="30">
            <el-col :span="14">
                <el-card class="detail">
                    <SignUpInfo :parentValue="valueFromParent"></SignUpInfo>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="timeline">
                    <HistoryCard></HistoryCard>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import SignUpInfo from '../../components/SignUpInfo.vue'
import HistoryCard from '../../components/HistoryCard.vue'

export default {
  name: 'ApprovalDetails',
  props: ['batchName', 'trueFacultyId'],
  data () {
    return {
      valueFromParent: this.$props
    }
  },
  components: {HistoryCard, SignUpInfo}

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
</style>
