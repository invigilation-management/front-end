<template>
    <div>
        <h1>
            <i class="el-icon-back"></i>|
            <span class="title_1">监考报名/</span>
            <span class="title_2">提交报名</span>
        </h1>
        <el-row :gutter="30">
            <el-col :span="14">
                <el-card class="detail">
                    <SignUpInfo></SignUpInfo>
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
  name: 'ParticipantInfo',
  components: {HistoryCard, SignUpInfo}
}
</script>

<style scoped>
.title_1{
    color: #00000066;
    font-size: 20px;
    font-face: PingFangSC;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: left;
}
.title_2{
    color: #000000e6;
    font-size: 20px;
    font-face: PingFangSC;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: left;
}
</style>
