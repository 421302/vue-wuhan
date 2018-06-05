<template>
  <div class="extend-virginia">
    <my-location></my-location>
    <div class="wrap">
      <!--规则-->
      <div class="border">
        <div class="title">维吉尼亚密码规则介绍</div>
          <p class="p">1、明文和密钥必须是1-50位长度的小写字母组成；</p>
          <p class="p">2、根据映射表，明文字符所在列和对应的密钥字符所在行的焦点处为所对应的密文；</p>
          <p class="p">3、明文和密钥的对应关系：在位置上，一个明文字符对应一个密钥字符。如果密钥长度小于明文长度时，密钥重复使用直到与明文字符对应完整；如果密钥长度等于明文长度时，明文字符和密钥字符一一对应；如果密钥长度大于明文长度时，明文字符和密钥字符一一对应，多余的密钥字符没有对应关系。
          </p>
      </div>
      <!--映射表-->
      <div class="border tab">
        <div class="title">维吉尼亚密码映射表</div>
         <!--表-->
        <table>
          <tbody>
            <tr v-for="(items) in tabData" >
              <td v-for="item in items" class="trs">{{item}}</td>
            </tr>
          </tbody>
        </table>
        <!--明文表头-->
        <table class="visible">
          <thead>
            <tr>
              <th v-for="item in tab" class="trs bg">{{item}}</th>
            </tr>
          </thead>
        </table>
        <!--暗文表头-->
        <table class="enVisible">
          <thead>
          <tr v-for="item in tab">
            <th class="trs bg2">{{item}}</th>
          </tr>
          </thead>
        </table>
        <div class="box">
          <div class="line-left"></div>
          <div class="line-right"></div>
          <div class="word-visible">明文</div>
          <div class="word-enVisible">密钥</div>
        </div>
      </div>
      <!--演示-->
      <demo :address=address :extendBtn="extendBtn"></demo>

    </div>
    </div>
  </div>
</template>

<script>
  import myLocation from 'base/myLocation/myLocation';
  import demo from 'components/cryptology/classical';
  export default {
    data(){
      return{
        tab:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
        tabData:{},
        address:false,
        extendBtn:false,
      }
    },
    created(){
      let data = this.tab;
      let tabs = {};
      for(let i=0;i<data.length;i++){
          let index = data.indexOf(data[i]);
          let newData = data.slice(index);
          for(let j=0;j<i;j++){
            newData.push(data[j]);
          }
          tabs[data[i]] = newData;
      }
      this.tabData = tabs;
    },
    components:{
      myLocation,
      demo
    }

  }
</script>

<style lang="scss" scoped >
  @import "../../common/style/mixin.scss";
  .extend-virginia{
    width:100%;
    .wrap{
      padding: 30px 20px 10px 20px;
      .border{
        margin-bottom:30px;
        @include border;
        .title{
        @include title;
        }
        .p{
          margin-bottom:6px;
          line-height: 25px;
        }
      }
      div.tab{
        padding:80px 0 20px 60px;
        position: relative;
        .visible{
          position: absolute;
          top:46px;
          left:60px;
        }
        .enVisible{
          position: absolute;
          top:80px;
          left:26px;
        }
        .box{
          position: absolute;
          top:32px;
          left:13px;
          .line-left{
            position: absolute;
            top:0;
            left:0;
            width: 0;
            border:20px solid transparent;
            border-top-color:#009E94;
            border-right-color:#009E94;
          }
          .line-right{
            osition: absolute;
            top:0;
            left:0;
            width: 0;
            border:20px solid transparent;
            border-bottom-color:#5FB878;
            border-left-color:#5FB878;
          }
          .word-visible{
            position: absolute;
            top:4px;
            left:16px;
            font-size:12px;
            color:#fff;
          }
          .word-enVisible{
            position: absolute;
            top:21px;
            left:1px;
            font-size:12px;
            color:#fff;
          }

        }
      }
      table{
        table-layout:fixed;
        border-collapse: collapse;
        text-align:center;
        .trs{
          border:1px solid #ccc;
          width: 25px;
          height: 25px;
        }
        .bg{
          background: #009E94;
           color:#fff;
        }
        .bg2{
          background: #5FB878;
          color:#fff;
        }
      }

    }


  }



</style>
