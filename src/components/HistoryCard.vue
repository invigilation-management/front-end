<!-- HistoryCard.vue -->
<template>
    <div class="block">
        <div class="radio">
            排序：
            <el-radio-group v-model="historyRecords.reverse">
                <el-radio :label="true">倒序</el-radio>
                <el-radio :label="false">正序</el-radio>
            </el-radio-group>
        </div>
        <el-timeline :reverse="historyRecords.reverse">
            <el-timeline-item v-for="(record, index) in historyRecords.timeline"
                              :timestamp="record.time"
                              :key="index"
                              placement="top"
                              :color="record.time ? 'blue' : 'default'">
                <el-card>
                    <h4>{{record.type}}</h4>
                    <p>{{record.name}} {{record.id}}</p>
                    <img src="../assets/images/11111.png" class="avatar">
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
export default {
  name: 'HistoryCard',
  data () {
    return {
      historyRecords: {
        reverse: false,
        now_state: 2,
        timeline:
          [{type: '发起人(在职转校级员工)', time: '2023-09-19 19:02:44', name: '小明', id: '10001'},
            {type: '审批人(学院研工办主任)', time: '2023-09-19 19:04:44', name: '小明', id: '10001'},
            {type: '审批人(学院分管研究生工作副院长)', time: '', name: '小明', id: '10001'},
            {type: '审批人(研究生招生考务科科长)', time: '', name: '小明', id: '10001'}]
      }
    }
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
