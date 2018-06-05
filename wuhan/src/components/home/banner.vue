<template>
  <div class="banner">
      <div class="wrap">
        <div class="text">亲爱的同学：</div>
        <ul>
          <li>
            <div class="icon">
              <i class="fa fa-book font-awesome"></i>
            </div>
            <div class="descrip">
              <p><span>{{course}}</span>门课程</p>
              <p>等你开启学习之旅</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <i class="fa fa-user-secret font-awesome"></i>
            </div>
            <div class="descrip">
              <p><span>{{teacher}}</span>名老师</p>
              <p>等待倾囊相授</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <i class="fa fa-user font-awesome"></i>
            </div>
            <div class="descrip">
              <p><span>{{student}}</span>名同学</p>
              <p>与你并肩作战</p>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>

  export default {
     data(){
         return {
           course:434,  //课程数
           teacher:22,   //老师数
           student:333   //学生数
         }
     }

  }
</script>

<style lang="scss" scoped >
  .banner{
    background: url("./20160905165946_38322.jpg") no-repeat bottom center;
    background-size:cover;
    width: 100%;
    height: 330px;
    position: relative;
    .wrap{
      width: 300px;
      height: 100%;
      background: rgba(52,133,251,0.7);
      position: absolute;
      top:0;
      left:65%;
      padding:20px;
      .text{
        color:#fff;
        font-size:18px;
        margin-bottom:20px;
      }
      ul li{
        height: 90px;
        border-bottom:1px solid rgba(255,255,255,0.3);
        padding-top:10px;
        .icon{
          font-size:35px;
          float:left;
          margin-right:20px;
        }
        .descrip{
          float:left;
          p{
            margin: 0 0 10px 0;
            color:#fff;
            font-size:14px;
            span{
              color:#fff;
              font-size:30px;
            }
          }
        }
      }
      ul li:last-child{
        border-bottom:none;
      }

    }

  .font-awesome{
    font-size:40px;
    color:#fff;
  }

  }

  @media screen and (max-width: 800px){
    .banner{
      width:800px;
    }
   .banner .wrap{
      left:500px;
    }


  }




</style>
