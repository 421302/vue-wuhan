<template>
  <div class="teacher">
    <div class="bg-wrap">
      <div class="wrap">
        <h2>授课大咖</h2>
        <div class="img-group clearfix">
          <!--图片-->
          <div class="img-item" v-for="(item,index) in teachers" @mouseenter="showRecommend(index)">
            <img src="./user_img_03.png" alt="">
            <div class="shade" v-if="!item.show"></div>
          </div>
        </div>
        <!--描述-->
        <div class="item" v-for="teacher in teachers" v-if="teacher.show">
          <h3>{{teacher.name}}</h3>
          <p>{{teacher.recommend}}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
        return {
            teachers:[],
        }
    },
    created(){
      axios.get('/teachersRecommend')
        .then((res)=>{
          for(let i=0;i<res.data.length;i++){
              if(!res.data[i].show){
                res.data[i].show = false;
                res.data[0].show = true;
              }
          }
          this.teachers = res.data;
        })
    },
    methods:{
      showRecommend(index){
        for(let i=0;i<this.teachers.length;i++){
            this.teachers[i].show = false;
        }
        this.teachers[index].show = true;
      }
    },

  }
</script>

<style lang="scss" scoped >

  .teacher{
    width: 100%;
    background: url("./20160905165946_38322.jpg") no-repeat bottom center;
    background-size:cover;
    .bg-wrap{
      padding:30px 0 40px 0;
      width:100%;
      background:rgba(255,255,255,0.6);
    }
    .wrap{
      width:1000px;
      margin: 0 auto;
      h2{
        font-size: 28px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 30px;
      }
      .img-group{
        margin-bottom:20px;
        .img-item{
          width: 10%;
          float:left;
          margin:0 2.5% 10px 0;
          position: relative;
          cursor: pointer;
          /*overflow: hidden;*/
          img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
          .shade{
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            border-radius: 50%;
          }
        }
        .img-item:nth(8n)-child{
          margin-right:0;
        }
      }
      .item{
        background: rgba(255,255,255,0.9);
        padding:10px 20px;
        border-radius: 8px;
        position: relative;
        h3{
          font-size:20px;
          margin-bottom:10px;
        }
        p{
          margin-bottom:6px;
          line-height: 23px;
        }
      }
    }
  }

  @media screen and (max-width: 1000px){
    .teacher .wrap{
      width:100%;
    }
    .teacher .wrap .img-group .img-item img{
      width: 90px;
      height: 90px;
    }
   .teacher .wrap .img-group .img-item .shade{
      width: 90px;
      height: 90px;
    }

  }

  @media screen and (max-width: 800px){
    .teacher{
      width:800px;
    }
    .teacher .wrap .img-group .img-item img{
      width: 80px;
      height: 80px;
    }
    .teacher .wrap .img-group .img-item .shade{
      width: 80px;
      height: 80px;
    }


  }

</style>
