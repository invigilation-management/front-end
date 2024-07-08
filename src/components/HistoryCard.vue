<!-- HistoryCard.vue -->
<template>
<!--    <div class="history-container">-->
<!--        <div v-for="(record, index) in historyRecords" :key="index" class="history-record">-->
<!--            <div class="record-content">-->
<!--                <p class="record-type">{{ record.type }}</p>-->
<!--                <p class="record-time">{{ record.time }}</p>-->
<!--            </div>-->
<!--            <el-button type="text" @click="editRecord(index)">编辑</el-button>-->
<!--        </div>-->
<!--    </div>-->
    <div style="height: 300px;">
        <el-steps direction="vertical" :active="1">
                <el-step
                    v-for="(record, index) in historyRecords"
                    :key="index"
                    :title="record.type"
                    description="">
                </el-step>
        </el-steps>
    </div>
</template>

<script>
export default {
  name: 'HistoryCard',
  data () {
    return {
      historyRecords: [
        { type: '发起人(在职转校级员工)', time: '2023-09-19 19:02:44' },
        { type: '审批人(学院研究生主任)', time: '2023-09-19 19:02:44' }
        // 更多记录...
      ]
    }
  },
  methods: {
    editRecord (index) {
      // 实现编辑记录的逻辑
      console.log('Editing record', index)
    }
  }
}
</script>

<style scoped>
.history-container {
    display: flex;
    flex-direction: column;
}
.history-record {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 10px;
}
.record-content {
    display: flex;
    flex-direction: column;
}
.record-type, .record-time {
    margin: 0;
}
</style>
