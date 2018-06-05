<template>
  <div class="cryptology clearfix">
    <div class="nav">
      <navigation :select="roleType"></navigation>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import navigation from 'base/navigation/navigation.vue';
  export default {
    data(){
      return{
        roleType:"cryptology"
      }
    },
    components:{
      navigation
    }

  }
</script>

<style lang="scss" scoped >
  .cryptology{
    width:1000px;
    margin:0 auto;
    padding:10px 0 10px 0;
    .nav{
      float:left;
      width:200px;
    }
    .content{
      float:right;
      width: 780px;
      min-height:500px;
      border:1px solid #ccc;
      border-radius: 5px;
    }
  }



</style>
