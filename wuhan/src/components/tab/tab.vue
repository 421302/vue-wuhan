<template>
  <div class='tab'>
    <div class="wrap">
      <div class="nav">
        <ul>
          <router-link to="/home" tag="li" class="">首页</router-link>
          <router-link to="/online_test" tag="li" class="">在线实验</router-link>
          <router-link to="/skills_competition" tag="li" class="">技能竞赛</router-link>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
  export default {


  }
</script>

<style lang="scss" scoped >
  .tab{
    width: 100%;
    height: 100%;
    border-bottom:1px solid #3485fb;
    background: #f3f3f3;
    .wrap{
      padding-top: 10px;
      .nav{
        width:1000px;
        margin:0 auto;
        ul{
          height:40px;
          line-height: 40px;
          li{
            float:left;
            padding:0 30px;
            border-radius: 15px 15px 0 0;
            cursor:pointer;
            position: relative;
          }
          li.router-link-active{
            background: #3485fb;
            color:#fff;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px){

    .nav{
      width:100%;
    }

  }
  @media screen and (max-width: 800px){
    .tab{
      width:800px;
    }

  }

</style>
