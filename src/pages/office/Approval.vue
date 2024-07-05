<template>
<div>报名审批
    <router-link to="agree-details">查看同意报名详情</router-link>
    <router-link to="disagree-details">查看同意报名详情</router-link>
    <router-link to="waiting-result">查看待审报名详情</router-link>
    <router-view></router-view></div>
</template>

<script>
export default {
  name: 'Approval'
}
</script>

<style scoped>

</style>
