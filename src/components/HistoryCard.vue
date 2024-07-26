<!-- HistoryCard.vue -->
<template>
    <div class="block">
        <div class="radio">
            排序：
            <el-radio-group v-model="historyRecords1.reverse">
                <el-radio :label="true">倒序</el-radio>
                <el-radio :label="false">正序</el-radio>
            </el-radio-group>
        </div>
        <el-timeline :reverse="historyRecords1.reverse">
            <el-timeline-item v-for="(record, index) in historyRecords.timeline"
                              :timestamp="record.approvalDate"
                              :key="index"
                              placement="top"
                              :color="record.approvalDate ? 'blue' : 'default'">
                <el-card>
                    <h4><span>
                        <div v-if="record.faculty.level == 1"><span style="color: #0d94f3">{{record.registration.college}}</span> 研工办主任</div>
                        <div v-if="record.faculty.level == 2"><span style="color: #0d94f3"></span>考务科科长</div>
                        <div v-if="record.faculty.level == 3"><span style="color: #0d94f3">{{record.registration.college}}</span> 普通教职工</div>
                        <div v-if="record.faculty.level == 4"><span style="color: #0d94f3">{{record.registration.college}}</span> 综合办主任</div>
                        <div v-if="record.faculty.level == 5"><span style="color: #0d94f3">{{record.registration.college}}</span> 副院长</div>
                    </span></h4>
                    <p>{{record.faculty.facultyName}} {{record.faculty.facultyId}}</p>
                    <el-row>
                        <el-col :span="12"><img :src=record.faculty.avatar class="avatar"></el-col>
                        <el-col :span="12" style="margin-top: 8px">
                            <div v-if="record.approvalResult == 1"><el-tag type="success" >已同意</el-tag></div>
                            <div v-if="record.approvalResult == 0"><el-tag type="danger" >已拒绝</el-tag></div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
import {historyCard} from '../api/office'
export default {
  name: 'HistoryCard',
  props: {
    parentValue: []
  },
  data () {
    return {
      historyRecords: {
        reverse: false,
        now_state: 0,
        timeline: []
      },
      historyRecords1: {
        reverse: false,
        now_state: 2,
        timeline:
                [{type: '发起人(在职转校级员工)', time: '2023-09-19 19:02:44', name: '小明', id: '10001', img: ''},
                  {type: '审批人(学院研工办主任)', time: '2023-09-19 19:04:44', name: '小明', id: '10001', img: ''},
                  {type: '审批人(学院分管研究生工作副院长)', time: '', name: '小明', id: '10001', img: ''},
                  {type: '审批人(研究生招生考务科科长)', time: '', name: '小明', id: '10001', img: ''}]
      },
      thisId: '',
      thisbatch: ''
    }
  },
  methods: {
    getHistoryData () {
      historyCard(this.$props.parentValue.trueFacultyId, this.$props.parentValue.batchName).then(res => {
        this.historyRecords.now_state = res.data.records[0].registration.state - 1
        this.historyRecords.timeline = res.data.records
        console.info('121413434132413')
        console.info(this.historyRecords.now_state)
        console.info(this.historyRecords.timeline)
      })
    }
  },
  created () {
    this.getHistoryData()
  }
}
</script>

<style scoped>
.avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover; /* 确保图片内容被适当地裁剪而不是被压缩 */
    overflow: hidden; /* 防止图片溢出容器边界 */
    display: block; /* 去除图片下方的空隙 */
}
</style>
