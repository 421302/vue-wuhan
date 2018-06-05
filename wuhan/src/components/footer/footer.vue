<template>
  <div class="footer">
      <div class="wrap clearfix">
        <div class="left">
          <p> 研制单位：武汉大学计算机学院</p>
          <p> 地  址：湖北省武汉市八一路武汉大学</p>
          <p> 邮  编：430072</p>
        </div>
        <div class="right">
          <img src="./icon1.jpg">
        </div>
      </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped >
  .footer{
    width: 100%;
    background:#f3f3f3;
    .wrap{
      width: 1000px;
      margin: 0 auto;
      padding:30px 0;
      .left{
        float:left;
        p{
          margin-bottom:8px;
        }
      }
      .right{
        float:right;
      }
    }


  }
  @media screen and (max-width: 1000px){
    .footer{
    .wrap{
      width: 100%;
    }
  }

  }
  @media screen and (max-width: 800px){
    .footer{
      width:800px;
    }

  }


</style>
