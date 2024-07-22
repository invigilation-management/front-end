<template>
    <div>
        <div class="rowahead">
            <i class="el-icon-back"></i><div class="title_2"><div class="ahead1">报名审批/</div>详情</div>
        </div>
        <el-card class="card">
            <div class="title">监考批次情况</div>
            <hr class="card-divider">
            <div class="smalltitle">批次名称：{{batch_name}}</div>
            <div class="smalltitle">批次开始时间：{{batch_start_time}}</div>
            <div class="smalltitle">批次结束时间：{{batch_end_time}}</div>
            <div class="smalltitle">批次时长：{{batch_duration}}天</div>
            <div class="smalltitle">监考说明：{{batch_info}}</div>
            <div class="smalltitle">上传附件：</div>
            <el-button type="text">附件.docx</el-button>
        </el-card>
    </div>
</template>

<script>
import {todetails} from '../../api/user'

export default {
  name: 'BatchDetail',
  props: ['batchname'],
  data () {
    return {
      batch_name: '',
      batch_start_time: '',
      batch_end_time: '',
      batch_duration: '',
      batch_info: ''
    }
  },
  methods: {
    show () {
      console.log(this.$props.batchname)
      todetails(this.$props.batchname).then(response => {
        console.log('kaishi')
        console.log(response)
        console.log('jieshu')
        this.batch_name = response.data.records[0].batchName
        this.batch_start_time = response.data.records[0].batchStartTime
        this.batch_end_time = response.data.records[0].batchEndTime
        this.batch_duration = response.data.records[0].batchDuration
        this.batch_info = response.data.records[0].batchInfo
      })
    }
  },
  created () {
    this.show()
  }
}
</script>

<style scoped>
.rowahead {
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    margin-top: 20px;
    margin-left: 20px;
    font-size: 25px;

}
.title_2{
    margin-left: 10px;
    display: flex;
    align-items: center; /* 垂直居中对齐 */
}
.card{
    margin: 10px;
    margin-top: 30px;
}
.title{
    margin-left: 10px;
    font-weight: 500;
    font-size: 20px;
    color: #000000e6;
    line-height: 28px;
}
.smalltitle{
    margin-top: 20px;
}
</style>
