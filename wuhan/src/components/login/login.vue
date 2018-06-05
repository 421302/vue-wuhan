<template>
  <div class="login">
    <div class="wrap">
      <div class="item">
        <!--文字-->
        <div class="text">
          <h3>用户登录</h3>
          <p>还没有账号？马上来<span @click="toRegister">注册</span>吧！</p>
        </div>
        <!--输入框-->
        <div class="form">
          <!--邮箱-->
          <el-input placeholder="请输入邮箱号" v-model="emil" class="input" @blur="_blur1()">
            <template slot="prepend">邮 箱</template>
          </el-input>
          <div class="err-tip emil" v-if="emilTip">{{emilTip}}</div>
          <!--密码-->
          <el-input placeholder="请输入密码" v-model="password" class="input" @blur="_blur2()">
            <template slot="prepend">密 码</template>
          </el-input>
          <div class="err-tip password" v-if="pasTip">{{pasTip}}</div>
          <!--按钮-->
          <button class="btn" @click="login()">登 录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {mapMutations} from 'vuex'
  export default {
      data(){
          return {
            emil:"",
            password:"",
            emilTip:"",
            pasTip:"",
          }
      },
      methods:{
        toRegister(){
          console.log(1);
        },
        login(){
          if(!this.emil){
              this.emilTip = "*邮箱号不能为空！"
          }
          if(!this.password){
            this.pasTip = "*密码不能为空！"
          }
          if(!this.emilTip && !this.pasTip){
            let param = {"emil":this.emil,"password":this.password};
            axios.post('/login',param)
              .then((res)=>{
                if(res.status === 200){
                  let statue = {
                    logOut:false,
                    logIn:true,
                    student:true,
                    teacher:false,
                    admin:false,
                    time:new Date().getTime() + 5 * 24 * 3600 * 1000
                  };
                  this.logStatus(statue);
                  this.$router.push({
                    path: '/home'      //跳到对应的页面
                  });

                }
              })

          }
        },
        _blur1(){
            let emilReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if(!this.emil){
              this.emilTip = "";
            }else{
              if(emilReg.test(this.emil)){
                this.emilTip = "";
              }else{
                this.emilTip = "*邮箱格式不正确，请确认后再输入！"
              }
          }
        },
        _blur2(){
          let pasReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
          if(!this.password){
            this.pasTip = ""
          }else{
            if(pasReg.test(this.password)){
              this.pasTip = ""
            }else{
              this.pasTip = "*密码由8到16位的字母和数字组成，请确认后再输入！"
            }
          }
        },
        ...mapMutations({
          logStatus: 'LOG_STATUS'
        })
      },

  }
</script>

<style lang="scss" scoped >
  .login{
    width: 100%;
    min-height: 400px;
    background: url("./20160905165946_38322.jpg") no-repeat bottom center;
    background-size: cover;
    .wrap{
      position:relative;
      .item{
        background: #fff;
        border-radius: 5px;
        width: 400px;
        position: absolute;
        top:50px;
        right: 10%;
        padding:20px;
        box-shadow:20px 20px 50px #000;
        .text{
          margin-bottom:15px;
          h3{
            margin-bottom:10px;
            color:#3485fb;
            font-size: 30px;
          }
          span{
            color:#3485fb;
            cursor: pointer;
          }
        }
        .form{
          position:relative;
          .input{
            margin-bottom: 20px;
          }
          .btn{
            background:#3485fb;
            font-size:16px;
            color:#fff;
            width: 100%;
            padding:10px;
            border:none;
            border-radius: 5px;
            cursor:pointer;
          }
          .err-tip{
            position: absolute;
            right:0;
            font-size:14px;
            color:red;
          }
          .emil{
            top:40px;
          }
          .password{
            top:100px;
          }
        }
      }
    }

  }

  @media screen and (max-width: 800px){
    .login{
      width:800px;
    }

  }

</style>
