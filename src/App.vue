<template>
  <div id="app">
    <router-view></router-view>
    <m-tabbar v-model="select">
     <m-tabbar-item id='index' isRouter>
        <img src="./assets/images/home.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/home_active.png" alt="" slot="icon-active"> 
        首页
      </m-tabbar-item>
      <m-tabbar-item id='bva' isRouter>
        <img src="./assets/images/BVA.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/BVA_active.png" alt="" slot="icon-active"> 
        书影音
      </m-tabbar-item>
      <m-tabbar-item id='broadcast' isRouter>
        <img src="./assets/images/broadcast.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/broadcast_active.png" alt="" slot="icon-active"> 
        广播
      </m-tabbar-item>
      <m-tabbar-item id='group' isRouter>
        <img src="./assets/images/group.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/group_active.png" alt="" slot="icon-active"> 
        小组
      </m-tabbar-item>
       <m-tabbar-item id='mine' isRouter>
        <img src="./assets/images/mine.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/mine_active.png" alt="" slot="icon-active"> 
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import mTabbar from './components/tabbar'
import mTabbarItem from './components/tabbar-item'
export default {
  name: 'app',
  components:{
      mTabbar,
      mTabbarItem
  },
  data() {
    return {
      select:"Index"
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>

</style>