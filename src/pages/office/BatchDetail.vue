<template>
    <div>
        <div class="rowahead">
            <i class="el-icon-back"></i>
            <div class="title_2">
                <div class="ahead1">报名审批/</div>详情
            </div>
        </div>
        <el-card class="card">
            <div class="content-wrapper">
                <div class="info">
                    <div class="title">监考批次情况</div>
                    <hr class="card-divider">
                    <div class="smalltitle">批次名称：{{batch_name}}</div>
                    <div class="smalltitle">批次开始时间：{{batch_start_time}}</div>
                    <div class="smalltitle">批次结束时间：{{batch_end_time}}</div>
                    <div class="smalltitle">批次时长：{{batch_duration}}天</div>
                    <div class="smalltitle">监考说明：监考人员要分别站位在教室前后,在不影响考生情况下,适当走动。</div>
                    <div class="smalltitle">需求人数：{{batch_expectnum}}</div>
                    <div class="smalltitle">通过人数：{{batch_alreadypassednum}}</div>
                    <div class="smalltitle">确认人数：{{batch_alreadyconfirmnum}}</div>
                </div>
                <div id="chart" class="chart"></div>
            </div>
        </el-card>
    </div>
</template>
<script>
import { todetails } from '../../api/user'
import * as echarts from 'echarts'

export default {
  name: 'BatchDetail',
  props: ['batchname'],
  data () {
    return {
      batch_name: '',
      batch_start_time: '',
      batch_end_time: '',
      batch_duration: '',
      batch_info: '',
      batch_expectnum: '',
      batch_alreadypassednum: '',
      batch_alreadyconfirmnum: ''
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
        this.batch_expectnum = response.data.records[0].expectNum
        this.batch_alreadypassednum = response.data.records[0].alreadyPassedNum
        this.batch_alreadyconfirmnum = response.data.records[0].alreadyConfirmNum
        this.$nextTick(() => { // 确保 DOM 更新后再初始化图表
          this.initChart()
        })
      })
    },
    initChart () {
      const chartDom = document.getElementById('chart')
      const myChart = echarts.init(chartDom)
      const option = {
        title: {
          text: '批次情况统计',
          left: 'center',
          top: '20px',
          textStyle: {
            color: '#000'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '批次情况',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '监考人员' },
              { value: 735, name: '考生' },
              { value: 580, name: '其他' }
            ]
          }
        ]
      }
      myChart.setOption(option)
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

.title_2 {
    margin-left: 10px;
    display: flex;
    align-items: center; /* 垂直居中对齐 */
}

.card {
    margin: 10px;
    margin-top: 30px;
}

.content-wrapper {
    display: flex;
    justify-content: space-around; /* 改为 space-around 以减少中间的空白 */
    align-items: flex-start; /* 顶部对齐 */
}

.info {
    flex: 1; /* 占据剩余空间 */
    max-width: 60%; /* 限制最大宽度 */
}

.chart {
    width: 300px; /* 减小图表的宽度 */
    height: 300px; /* 减小图表的高度 */
    margin-left: 20px; /* 与信息部分之间的空隙 */
}

.title {
    margin-left: 10px;
    font-weight: 500;
    font-size: 20px;
    color: #000000e6;
    line-height: 28px;
}

.smalltitle {
    margin-top: 20px;
    height: 35px;
    font-size: 16px;
    font-weight: bold
}
</style>
