<template>
  <div id="app">
    <!--头部-->
    <div class="head-wrapper">
      <head-icon></head-icon>
    </div>
    <!--导航-->
    <tab></tab>
    <!--导航对应的中间内容-->
    <router-view></router-view>
    <!--尾部-->
    <div class="footer">
      <footers></footers>
    </div>
  </div>
</template>

<script>
  import headIcon from 'components/headIcon/headIcon.vue';
  import tab from 'components/tab/tab.vue';
  import footers from 'components/footer/footer.vue';

  export default {
    components:{
        headIcon,
        tab,
        footers
    }

  }
</script>

<style scoped lang="scss">
  #app{
    width:100%;
    height:100%;
    .head-wrapper{
      width:100%;
      background: #f3f3f3;
    }

  }
</style>
