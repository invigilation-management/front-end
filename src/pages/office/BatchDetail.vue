<template>
    <div>
        <div class="rowahead">
            <i class="el-icon-back"></i><div class="title_2"><div class="ahead1">报名审批/</div>详情</div>
        </div>
        <el-card class="card">
            <div class="title">监考批次情况</div>
            <hr class="card-divider">
            <div class="smalltitle">批次名称：</div>
            <div class="smalltitle">关联年份：</div>
            <div class="smalltitle">批次开始时间：</div>
            <div class="smalltitle">批次结束时间：</div>
            <div class="smalltitle">批次时长：</div>
            <div class="smalltitle">监考说明：监考说明监考说明监考说明</div>
            <div class="smalltitle">上传附件：</div>
            <el-button type="text">附件.docx</el-button>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'BatchDetail'
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
