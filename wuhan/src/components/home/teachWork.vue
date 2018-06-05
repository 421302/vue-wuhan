<template>
  <div class="teach-work">
      <div class="bg-wrap">
        <div class="wrap">
          <div class="title">教学工作</div>
          <ul class="clearfix">
            <li class="bg">
              <div :class="{gacidou:flag1}" @mouseenter="listHover1()"><i class="fa fa-clipboard" :class="{fontAwesome:flag1}"></i>教学概述</div>
            </li>
            <li class="bg">
              <div :class="{gacidou:flag2}" @mouseenter="listHover2()"><i class="fa fa-desktop" :class="{fontAwesome:flag2}"></i>实验平台</div>
            </li>
            <li class="bg">
              <div :class="{gacidou:flag3}" @mouseenter="listHover3()"><i class="fa fa-trophy" :class="{fontAwesome:flag3}"></i>教学成果</div>
            </li>
          </ul>
          <!--tab-->
          <div class="show-group">
            <div v-if="flag1">
              <h3 class="text">利用“互联网+教育”的教学模式，打造出与教学体系相结合的虚拟仿真实验平台</h3>
              <div class="list-group clearfix">
                <div class="item">
                  <div class="icon icon1"></div>
                  <h3>在线实验</h3>
                  <p>随心所欲定制高校云平台</p>
                  <p>采用MOOE模式，分分钟搭建专属实验环境</p>
                </div>
                <div class="item">
                  <div class="icon icon2"></div>
                  <h3>技能竞赛</h3>
                  <p>完全贴近实战的演练平台</p>
                  <p>在寓教于乐中磨炼技艺，提高实战技能</p>
                </div>
                <div class="item">
                  <div class="icon icon3"></div>
                  <h3>在线实验</h3>
                  <p>基于在线行为的数据统计与分析</p>
                  <p>可对于学生进行个性化综合能力评估</p>
                </div>
              </div>

            </div>
            <div v-if="flag2">
              <h3 class="text">实验平台</h3>
            </div>
            <div v-if="flag3">
              <h3 class="text">在线实验</h3>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    data(){
        return {
            flag1:true,
            flag2:false,
            flag3:false
        }
    },

    methods:{
      listHover1(){
          this.flag1 = true;
          this.flag2 = false;
          this.flag3 = false;
      },
      listHover2(){
        this.flag1 = false;
        this.flag2 = true;
        this.flag3 = false;
      },
      listHover3(){
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
      }
    }

  }
</script>

<style lang="scss" scoped >
  .teach-work{
    width: 100%;
    background: url("./20160905165946_38322.jpg") no-repeat bottom center;
    background-size:cover;
    .bg-wrap{
      padding:30px 0 40px 0;
      width:100%;
      background:rgba(255,255,255,0.6)
    }
    .wrap{
      width: 1000px;
      margin: 0 auto;
    }
    .title{
      font-size: 28px;
      font-weight: 400;
      text-align: center;
      margin-bottom: 30px;
    }
    ul{
      margin-bottom:30px;
      li.bg{
        width:30%;
        float:left;
        margin-right:5%;
        font-size:18px;
        i{
          margin-right: 8px;
        }
        div{
          text-align: center;
          margin: 0 auto;
          padding:10px 0;
          width: 100%;
          background:#ccc;
          cursor:pointer;
        }
      }
      li.bg:last-child{
        margin-right:0;
      }
    }
    .gacidou{
      background:#3485fb !important;
      box-shadow:0 0 10px 5px #fff;
      color:#fff;
    }
    .show-group{
      text-align: center;
    }
      .text{
        margin:30px 0 40px 0;
        color:#3485fb;
        font-size:18px;
      }
      .list-group .item{
        float:left;
        width: 30%;
        margin-right:5%;
        .icon{
          width: 100px;
          height: 100px;
          margin: 0 auto 10px auto;
          transition:0.5s;
        }
        .icon:hover{
          transform:translateY(-20px);
          transition:0.3s;
        }
        .icon1{
          background: url("./about-tab-1.png") no-repeat center;
          background-size:cover;
        }
        .icon2{
          background: url("./about-tab-2.png") no-repeat center;
          background-size:cover;
        }
        .icon3{
          background: url("./about-tab-3.png") no-repeat center;
          background-size:cover;
        }
        h3{
          color:#3485fb;
          margin-bottom:8px;
        }
        p{
          margin-bottom:5px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .list-group .item:last-child{
        margin-right:0;
      }

    .fontAwesome{
      color:#fff;
    }
  }

  @media screen and (max-width: 1000px){

    .teach-work .wrap{
      width:100%;
    }

  }


  @media screen and (max-width: 800px){
    .teach-work{
      width:800px;
    }

  }


</style>
