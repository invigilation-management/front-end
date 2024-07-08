<template>
    <div>
        <div class="rowahead">
            <i class="el-icon-back"></i>
            <div class="title">
                <div class="ahead1">
                    |  报名审批/
                </div>
                审批详情
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ApprovalDetails'
}
</script>

<style scoped>
.title{
    margin-left: 10px;
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    color: #000000e6;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: left;
}
.rowahead {
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    margin-top: 20px;
    margin-left: 20px;
    font-size: 25px;
    width: 257px;
    height: 64px;
}
.ahead1{
    color: #00000066;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0;
    paragraph-spacing: 0;
    text-align: left;
}
</style>
