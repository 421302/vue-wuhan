<template>
  <div class="head">
    <header class="clearfix">
        <div class="logo">
          <a href="javascript:void(0);" @click="toHome()">
            <img src="./icon1.jpg">
          </a>
          <span>
              <img src="./icon2.jpg">
           </span>
        </div>
        <div class="login-box">
          <div class="wrap" v-if="logStatus.logOut">
            <a href="javascript:void(0);" class="login" @click="toLogin()">登录</a>
            <a href="javascript:void(0);" class="register" @click="toRegister()">注册</a>
          </div>
          <div class="wrap" v-if="logStatus.logIn">
            <div v-if="logStatus.student">
              <span>学生中心</span>
               ***欢迎你
            </div>
            <div v-if="logStatus.teacher">
              教师中心 ***欢迎你
            </div>
            <div v-if="logStatus.admin">
              管理中心 ***欢迎你
            </div>

          </div>
        </div>
    </header>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex'
  export default {
      data(){
          return {

          }
      },
      computed:{
        ...mapGetters([
          'logStatus'
        ])
      },
      methods:{
        toHome(){
          this.$router.push({
            path: '/home'
          })
        },
        toLogin(){
          this.$router.push({
            path: '/login'
          })
        },
        toRegister(){
          this.$router.push({
            path: '/register'
          })
        }
      }

  }
</script>

<style lang="scss" scoped >
  .head{
    width: 100%;
    height:80px;
    font-size:0;
    background: #f3f3f3;
    header{
      width:1000px;
      margin: 0 auto;
      .logo{
        float:left;
      }
      .login-box{
        font-size:14px;
        font-weight: 400;
        float:right;
        .wrap{
          height: 80px;
          line-height: 80px;
          padding-right:20px;
          a{
            padding-left: 10px;
          }
          a:hover{
            color:#3485fb;
          }
          .register{
            position: relative;
          }
        }
      }
    }

  }
  @media screen and (max-width: 1000px){
    .head header{
      width:100%;
    }

  }
  @media screen and (max-width: 800px){
    .head header{
      width:800px;
    }

  }




</style>
