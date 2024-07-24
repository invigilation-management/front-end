<template>
  <suncaper-layout
    theme="light"
    :logo="logo"
    :sidebar-list="sidebarList"
    :logout="logout"
  />
</template>

<script>
import {mapGetters} from 'vuex'
import Layout from '@/layouts/Layout'
import logo from '@/assets/images/xjtu.png'

export default {
  name: 'Main',
  data () {
    return {
      logo: {
        src: logo,
        alt: '抽象小学期',
        firstDes: '抽象小学期',
        secondDes: '之研究生报名系统'
      }
    }
  },
  computed: {
    ...mapGetters({
      userType: 'user/getUserType',
      getSidebarList: 'sidebar/getSidebarList'
    }),
    sidebarList () {
      return this.getSidebarList(this.userType).main
    }
  },
  methods: {
    logout () {
    }
  },
  components: {
    'suncaper-layout': Layout
  }
}
</script>
