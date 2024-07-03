<template>
    <div>
        <h1>用户列表</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    fetchUsers () {
      // 模拟用户数据
      this.users = [
        { id: 1, name: '卢鑫培' },
        { id: 2, name: '张三' },
        { id: 3, name: '李四' }
      ]
    }
  }
}
</script>
