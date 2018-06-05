<template>
  <div class="hot-course">
      <div class="wrap">
        <h2>热门课程</h2>
        <div class="course-group clearfix">
          <div class="course-item" v-for="(item,index) in groupData">
            <div class="img" @mouseenter="showLink(index)" @mouseleave="hideLink(index)">
              <img src="./20170405140841_62063.jpg" :alt="index">
              <div class="shade" v-if="item.shade">
                <a :href="item.link">查看详情<i class="fa fa-arrow-circle-right font-awesome"></i></a>
              </div>
            </div>
            <div class="word">
              <h3>{{item.name}}</h3>
              <div class="description clearfix">
                <div class="left"><i class="fa fa-bullhorn "></i>{{item.course}}</div>
                <div class="right"><i class="fa fa-user-secret"></i>{{item.teacherName}}</div>
              </div>
            </div>
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
          groupData:[],
        }
    },
    created(){
      axios.get('/courseList')
        .then((res)=>{
          for(let i=0;i<res.data.length;i++){
              if(!res.data[i].shade){
                res.data[i].shade = false;
              }
          }
          this.groupData = res.data;
        })
    },
    methods:{
      showLink(index){
        this.groupData[index].shade = true;
      },
      hideLink(index){
        this.groupData[index].shade = false;
      }
    }

  }
</script>

<style lang="scss" scoped >
  .hot-course{
    width: 100%;
    .wrap{
      width: 1000px;
      margin: 0 auto;
      padding:30px 0 40px 0;
      h2{
        font-size: 28px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 30px;
      }
      .course-group .course-item{
        float:left;
        width: 22%;
        margin:0 4% 8px 0;
        .img{
          position: relative;
          width: 100%;
          overflow: hidden;
          img{
            width:220px;
            height:125px;
          }
        }
        .shade{
          position: absolute;
          top:0;
          left:0;
          background: rgba(0,0,0,0.7);
          width: 100%;
          height: 100%;
          text-align: center;
          a{
            display: inline-block;
            padding:3px 15px;
            border:1px solid #fff;
            border-radius: 3px;
            color:#fff;
            margin-top: 20%;
            i{
              margin-left:8px;
            }
          }
          a:hover{
            border:1px solid #3485fb;
            color:#3485fb;
            i{
              color:#3485fb;
            }
          }
        }
        .word{
          padding:10px 5px;
          background: #f3f3f3;
          h3{
            margin-bottom:10px;
          }
          .description{
            .left{
              float:left;
              max-width: 60%;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .right{
              float:right;
              max-width: 35%;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            i{
              margin-right:3px;
            }
          }
        }
      }
      .course-group .course-item:nth-child(4n){
        margin-right:0;
      }
    }
    .font-awesome{
      color:#fff;
    }
  }

  @media screen and (max-width: 1000px){

     .hot-course .wrap{
      width: 100%;
    }
   .hot-course .wrap .course-group .course-item .img img{
     width: 210px;
     height: 110px;
   }


  }
  @media screen and (max-width: 800px){
    .hot-course{
      width:800px;
    }

  }
</style>
