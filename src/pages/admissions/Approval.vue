<template>
<div>报名审批
    <router-link to="agree">查看同意报名详情</router-link>
    <router-link to="disagree">查看同意报名详情</router-link>
    <router-link to="waiting">查看待审报名详情</router-link>
    <router-view></router-view>
</div>

</template>

<script>
export default {
  name: 'Approval'
}
</script>

<style scoped>

</style>
