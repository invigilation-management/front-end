<template>
    <suncaper-layout
            theme="dark"
            :logo="logo"
            :sidebar-list="sidebarList"
            :logout="logout"
    >
        <router-view></router-view>
    </suncaper-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Layout from '@/layouts/Layout'
import logo from '@/assets/images/logo.png'

export default {
  name: 'Main',
  data () {
    return {
      logo: {
        src: logo,
<<<<<<< HEAD
        alt: '上程数据',
        firstDes: '抽象小学期',
        secondDes: '之研究生监考报名'
=======
        alt: '抽象小学期',
        firstDes: '抽象小学期',
        secondDes: '之研究生报名系统'
>>>>>>> af0c7ec70e33674f7641d11f9514cc2236235e04
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
