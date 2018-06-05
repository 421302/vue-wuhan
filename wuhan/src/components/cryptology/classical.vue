<template>
  <div class="classical">
    <my-location v-if="address"></my-location>
    <div class="wrap">
      <!-----------------------维吉尼亚密码------------------------->
      <div class="border">
        <div class="title">维吉尼亚密码</div>
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <!-----------------加密------------------>
            <el-tab-pane label="加 密" name="first">

              <div class="item" v-for="(item,key) in data.encrypt">
                <label>{{item.label}}</label>
                <el-input v-model.trim="item.inputVal" :placeholder="item.placeholder" class="input" @blur="_blur(key)" :disabled="item.disabled"></el-input>
                <div class="err-tip" v-if="item.errTip">{{item.errTip}}</div>
              </div>
              <!--按钮-->
              <el-button class="btn btn-first" @click="encrypt()">加 密</el-button>
              <el-button  class="btn" @click="deletes('encrypt')">清 空</el-button>
            </el-tab-pane>
            <!-----------------解密------------------>
            <el-tab-pane label="解 密" name="second">
              <div class="item" v-for="(item,key) in data.decodes">
                <label>{{item.label}}</label>
                <el-input v-model.trim="item.inputVal" :placeholder="item.placeholder" class="input" @blur="_blur(key)" :disabled="item.disabled"></el-input>
                <div class="err-tip" v-if="item.errTip">{{item.errTip}}</div>
              </div>
              <!--按钮-->
              <el-button class="btn btn-first" @click="decode()">解 密</el-button>
              <el-button  class="btn" @click="deletes('decodes')">清 空</el-button>
            </el-tab-pane>
          </el-tabs>
        </template>
      </div>
      <!-----------------------扩展实验------------------------->
      <div class="extend-test border" v-if="extendBtn">
        <div class="title">扩展实验</div>
        <el-button class="btn btn-first" @click="extentTest()">维吉尼亚密码详解</el-button>
      </div>

    </div>
  </div>
</template>

<script>
  import myLocation from 'base/myLocation/myLocation';
  export default {
    props:{
      address: {
        type: Boolean,
        default: true
      },
      extendBtn: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return{
        data:{
          encrypt:{
            visible:{
              label:"明文：",
              inputVal:"",
              placeholder:"请输入明文，明文是1-50位长度的小写字母组成！",
              disabled:false,
              errTip:""
            },
            key1:{
              label:"密钥：",
              inputVal:"",
              placeholder:"请输入密钥，密钥是1-50位长度的小写字母组成！",
              disabled:false,
              errTip:""
            },
            enVisible:{
              label:"密文：",
              inputVal:"",
              placeholder:"加密后的密文展示！",
              disabled:true
            }
          },
          decodes:{
            enVisible:{
              label:"密文：",
              inputVal:"",
              placeholder:"请输入密文，密文是1-50位长度的小写字母组成！",
              disabled:false,
              errTip:""
            },
            key2:{
              label:"密钥：",
              inputVal:"",
              placeholder:"请输入密钥，密钥是1-50位长度的小写字母组成！",
              disabled:false,
              errTip:""
            },
            visible:{
              label:"明文：",
              inputVal:"",
              placeholder:"解密后的明文展示！",
              disabled:true
            }
          }
        },
        activeName:"first",
      }
    },
    components: {
      myLocation,
    },
    methods: {
      handleClick(tab, event) {},
      //表单失焦格式验证--错误提示
      _blur(type){
        if(type === "visible" || type === "key1"){
          this.init("encrypt",type);
        }else if(type === "key2" || type === "enVisible"){
          this.init("decodes",type);
        }
      },
      init(state,type){
        let reg = /^[a-z]{1,50}$/;
        let val = this.data[state][type].inputVal;
        if(state === "encrypt"){
          this.data[state].enVisible.inputVal = "";
        }else{
          this.data.decodes.visible.inputVal = "";
        }
        this.data[state][type].errTip = "";
        if(!val)return;
        if(!reg.test(val)){
          this.data[state][type].errTip = "*格式错误！"
        }
      },

      //加密
      encrypt(){
          this.common("encrypt");
      },
      //解密
      decode(){
        this.common("decodes");
      },
      //加解密的弹窗提示及公共函数
      common(state){
        let visibleReg = /^[a-z]{1,50}$/;
        if(state === "encrypt"){
          var val = this.data[state].visible.inputVal;
          var val2 = this.data[state].key1.inputVal;
        }else{
          var val = this.data[state].enVisible.inputVal;
          var val2 = this.data[state].key2.inputVal;
        }
        if( !val && state === "encrypt" ){
          this._messageBox("明文不能为空！");
          return
        }if( !val && state === "decodes" ){
          this._messageBox("密文不能为空！");
          return
        }else if(!val2){
          this._messageBox("密钥不能为空！");
          return
        }else if(!visibleReg.test(val) && state === "encrypt"){
          this._messageBox("明文格式不正确，明文是1-50位长度的小写字母组成！");
          return
        }else if(!visibleReg.test(val) && state === "decodes"){
          this._messageBox("密文格式不正确，密文是1-50位长度的小写字母组成！");
          return
        }else if(!visibleReg.test(val2)){
          this._messageBox("密钥格式不正确，密钥是1-50位长度的小写字母组成！");
          return
        }
        if(val && val2 && visibleReg.test(val) && visibleReg.test(val2)){
          if(state === "encrypt"){
            this.data[state].enVisible.inputVal = this.VigenereEncrypt(val2,val);
          }else{
            this.data.decodes.visible.inputVal = this.VigenereDisEncrypt(val2,val);
          }
        }
      },
      //弹窗
      _messageBox(word){
        this.$alert(word, '提示', {
          confirmButtonText: '确定',
          callback: action => {}
        });
      },

      // 维吉尼亚密钥长度处理  返回处理后的密钥
      _strKey: function(strK,str){//生成密钥字符串,strK为密钥，str为明文或者密文
        var lenStrK = strK.length;
        var lenStr = str.length;
        if(lenStrK != lenStr){//如果密钥长度与str不同，则需要生成密钥字符串
          if(lenStrK < lenStr){//如果密钥长度比str短，则以不断重复密钥的方式生成密钥字符串
            while(lenStrK < lenStr){
              strK = strK + strK;
              lenStrK = 2 * lenStrK;
            }
          }//此时，密钥字符串的长度大于或等于str长度
          strK = strK.substring(0,lenStr);//将密钥字符串截取为与str等长的字符串
        }
        return strK;
      },

      // 维吉尼亚加密  返回处理后的密文
      VigenereEncrypt(K,P){      //维吉尼亚加密算法，K为密钥，P为明文
        let Vigenere = {
          _strCpr: 'abcdefghijklmnopqrstuvwxyz',
        };
        Vigenere.lenCpr = Vigenere._strCpr.length;
        K = this._strKey(K,P);
        var lenK = K.length;
        var rlt = '';
        var loop = 0;
        for(loop=0; loop<lenK; loop++){
          var iP = Vigenere._strCpr.indexOf(P.charAt(loop));
          var iK = Vigenere._strCpr.indexOf(K.charAt(loop));
          var i = (iP + iK) % Vigenere.lenCpr;
          rlt = rlt + Vigenere._strCpr.charAt(i);
        }
        return rlt;
      },

      // 维吉尼亚解密  返回处理后的明文
      VigenereDisEncrypt(K,C){     //维吉尼亚解密算法，K为密钥，c为明文
        let Vigenere = {
          _strCpr: 'abcdefghijklmnopqrstuvwxyz',
        };
        Vigenere.lenCpr = Vigenere._strCpr.length;
        K = this._strKey(K,C);
        var lenK = K.length;
        var rlt = '';
        var loop = 0;
        for(loop=0; loop<lenK; loop++){
          var iK = Vigenere._strCpr.indexOf(K.charAt(loop));
          var iC = Vigenere._strCpr.indexOf(C.charAt(loop));
          if(iK > iC){
            rlt += Vigenere._strCpr.charAt(iC + Vigenere.lenCpr - iK);
          }else{
            rlt += Vigenere._strCpr.charAt(iC - iK);
          }
        }
        return rlt;
      },

      //清空按钮
      deletes(type){
        this.data[type].visible.inputVal = "";
        this.data[type].visible.errTip = "";
        this.data[type].enVisible.inputVal = "";
        this.data[type].enVisible.errTip = "";
        if(type === "encrypt"){
          this.data.encrypt.key1.inputVal = "";
          this.data[type].key1.errTip = "";
        }else{
          this.data.decodes.key2.inputVal = "";
          this.data[type].key2.errTip = "";
        }
      },

      //扩展按钮
      extentTest(){
        this.$router.push({
          path: '/cryptology_classical/extend_VirginiaKey'
        })
      }
    }

  }
</script>

<style lang="scss" scoped >
  @import "../../common/style/mixin.scss";
  .classical{
    width:100%;
    .wrap{
      padding:30px 20px 10px 20px;
      .border{
        margin-bottom:30px;
        @include border;
        .title{
        @include title;
        }
      }
      .btn-first{
        margin-left:70px;
      }
      .item{
        margin-bottom:15px;
        position: relative;
      }
      label{
        display: inline-block;
        font-size:14px;
        width:66px;
        text-align: right;
      }
      .input{
        width: 70%;
      }
      .btn{
        padding:10px 20px;
        background: #3485fb;
        color:#fff;
      }
      .err-tip{
        position: absolute;
        top:10px;
        left:83%;
        font-size:14px;
        color:red;
      }
    }

  }



</style>
