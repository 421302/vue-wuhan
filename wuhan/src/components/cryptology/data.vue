<template>
  <div class="data">
    <my-location></my-location>
    <div class="wrap">
      <div class="border">
        <div class="title">数据加密标准 DES算法</div>
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <!-----------------加密------------------>
            <el-tab-pane label="加 密" name="first">
              <div class="item" v-for="(items,key) in data.encrypt">
                <label>{{items.label}}</label>
                <el-select v-model="items.selectValue" placeholder="请选择" class="select" @change="optionChange(key)">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <input class="input" v-model.trim="items.inputVal" :placeholder="items.placeholder" :disabled="items.disabled" @blur="_blur(key)">
                <div class="err-tip" v-if="items.errTip">{{items.errTip}}</div>
              </div>
              <!--按钮-->
              <el-button class="btn btn-first" @click="encrypt()">加 密</el-button>
              <el-button  class="btn" @click="deletes('encrypt')">清 空</el-button>
            </el-tab-pane>

            <!-----------------解密------------------>
            <el-tab-pane label="解 密" name="second">
              <div class="item" v-for="(items,key) in data.decodes">
                <label>{{items.label}}</label>
                <el-select v-model="items.selectValue" placeholder="请选择" class="select" @change="optionChange(key)">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <input class="input" v-model.trim="items.inputVal" :placeholder="items.placeholder" :disabled="items.disabled" @blur="_blur(key)">
                <div class="err-tip" v-if="items.errTip">{{items.errTip}}</div>
              </div>
              <!--按钮-->
              <el-button class="btn btn-first" @click="decode()">解 密</el-button>
              <el-button  class="btn" @click="deletes('decodes')">清 空</el-button>
            </el-tab-pane>
          </el-tabs>
        </template>
      </div>

      <!-----------------------加密代码------------------------->
      <div class="cryptology-code border">
        <div class="title">加密代码</div>
        <el-button class="btn btn-first" @click="lookCode()">查看源码</el-button>
        <el-button class="btn" @click="">自定义代码</el-button>
      </div>

      <!-----------------------解密代码------------------------->
      <div class="decode-code border">
        <div class="title">解密代码</div>
        <el-button class="btn btn-first" @click="">查看源码</el-button>
        <el-button class="btn" @click="">自定义代码</el-button>
      </div>

      <!-----------------------扩展实验------------------------->
      <div class="extend-test border">
        <div class="title">扩展实验</div>
        <el-button class="btn btn-first" @click="extentTest()">DES算法详解</el-button>
      </div>

    </div>

  </div>
</template>

<script>
  import myLocation from 'base/myLocation/myLocation';
  import {strEnc,strDec} from 'api/DES';
  import axios from 'axios';
  let PARAM = "请输入8位长度的任意字符！";
  let PARAM2 = "请输入16位长度的十六进制数！";
  export default {
    data(){
      return{
        data:{
          encrypt:{
            visible:{
              label:"明文：",
              inputVal:"",
              placeholder:PARAM,
              disabled:false,
              errTip:"",
              selectValue:"1",
            },
            key1:{
              label:"密钥：",
              inputVal:"",
              placeholder:PARAM,
              disabled:false,
              errTip:"",
              selectValue:"1",
            },
            enVisible:{
              label:"密文：",
              inputVal:"",
              placeholder:"加密后的密文展示！",
              disabled:true,
              selectValue:"1",
            }
          },
          decodes:{
            enVisible:{
              label:"密文：",
              inputVal:"",
              placeholder:PARAM,
              disabled:false,
              errTip:"",
              selectValue:"1",
            },
            key2:{
              label:"密钥：",
              inputVal:"",
              placeholder:PARAM,
              disabled:false,
              errTip:"",
              selectValue:"1",
            },
            visible:{
              label:"明文：",
              inputVal:"",
              placeholder:"解密后的明文展示！",
              disabled:true,
              selectValue:"1",
            }
          }
        },
        options: [{
          value: '1',
          label: '文本'
        }, {
          value: '2',
          label: '十六进制'
        }],
        activeName:"first",
      }
    },
    components:{
      myLocation
    },
    methods:{
      handleClick(tab, event) {},
      //表单失焦判断
      _blur(type){
        if(type === "visible" || type === "key1"){
          this.init("encrypt",type);
        }else if(type === "enVisible" || type === "key2"){
          this.init("decodes",type);
        }
      },
      init(state,type){
        let Reg1 = /[\u4e00-\u9fa5]/;
        let Reg16 = /^[0-9a-fA-F]{16}$/;
        let val = this.data[state][type].inputVal;
        let select = this.data[state][type].selectValue;
        if(state === "encrypt"){
          this.data[state].enVisible.inputVal = "";
        }else{
          this.data.decodes.visible.inputVal = "";
        }
        this.data[state][type].errTip = "";
        if(!val)return;
        if(select === "1"){
          if(Reg1.test(val) || val.length !== 8){
            this.data[state][type].errTip = "*格式错误！"
          }
        }else{
          if(Reg1.test(val) || !Reg16.test(val)){
            this.data[state][type].errTip = "*格式错误！"
          }
        }

      },

      //文本与16进制转换
      optionChange(type){
        if(type === "visible" || type === "key1"){
          this.shiftCommon("encrypt",type);
        }else if(type === "enVisible" || type === "key2"){
          this.shiftCommon("decodes",type);
        }
      },
      shiftCommon(state,type){
        let select = this.data[state][type].selectValue;
        let val = this.data[state][type].inputVal;
        if(!val){return;}
        if(select === "1"){
          this.data[state][type].inputVal = this.hexToString(val);
          this.data[state][type].placeholder = PARAM;
        }else{
          this.data[state][type].inputVal = this.stringToHex(val);
          this.data[state][type].placeholder = PARAM2;
        }
      },
      //字符串转16进制
      stringToHex(str){
        var val="";
        for(var i = 0; i < str.length; i++){
          val += str.charCodeAt(i).toString(16);
        }
        return val;
      },
      //16进制转字符串
      hexToString(hexCharCodeStr) {
        let trimedStr = hexCharCodeStr.trim();
        let rawStr = trimedStr.substr(0,2).toLowerCase() === "0x" ? trimedStr.substr(2) : trimedStr;
        let len = rawStr.length;
        if(len % 2 !== 0) {
          this._messageBox("非法的16进制转换！");
          return;
        }
        let curCharCode;
        let resultStr = [];
        for(let i = 0; i < len;i = i + 2) {
          curCharCode = parseInt(rawStr.substr(i, 2), 16);
          resultStr.push(String.fromCharCode(curCharCode));
        }
        return resultStr.join("");
      },
      //弹窗
      _messageBox(word){
        this.$alert(word, '提示', {
          confirmButtonText: '确定',
          callback: action => {}
        });
      },

      //加密
      encrypt(){
        let msg = this.data.encrypt.visible.inputVal;
        let key = this.data.encrypt.key1.inputVal;
        let selectMsg = this.data.encrypt.visible.selectValue;
        let selectKey = this.data.encrypt.key1.selectValue;
        let reg = /[\u4e00-\u9fa5]/;
        let reg16 = /^[0-9a-fA-F]{16}$/;
        if(!msg || !key){
          this._messageBox("明文或密钥不能为空！");
          return;
        }else if(reg.test(msg) || reg.test(key)){
          this._messageBox("明文或密钥不能有中文汉字");
          return;
        }else if(selectMsg === "1" && msg.length !== 8 ||selectKey === "1" && key.length !== 8){
          this._messageBox("在文本模式下的明文或密钥输入有误，请输入8位长度的任意字符！");
          return;
        }else if(selectMsg === "2" && !reg16.test(msg) || selectKey === "2" && !reg16.test(key)){
          this._messageBox("在十六进制模式下的明文或密钥输入有误，请输入16位长度的十六进制数！");
          return;
        }

        axios.get('/enVisible')
          .then((res)=>{
            this.data.encrypt.enVisible.inputVal = res.data.a;
        })

      },
      //解密
      decode(){
        let msg = this.data.decodes.enVisible.inputVal;
        let key = this.data.decodes.key2.inputVal;
        let a = strDec(msg,key);
        console.log(a);
      },
      //扩展实验
      extentTest(){
        this.$router.push({
         path: '/cryptology_data/extend_DES'
         })
      },
      //查看源码
      lookCode(){
        this.$router.push({
          path: '/cryptology_data/ace-editor'
        })
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
    }

  }
</script>

<style lang="scss" scoped >
  @import "../../common/style/mixin.scss";
  .data{
    width:100%;
    .wrap{
      padding:30px 20px 20px 20px;
      .border{
        margin-bottom:30px;
        @include border;
        .title{
          @include title;
        }
        .item{
          margin-bottom:15px;
          position: relative;
          .select{
            width: 103px;
          }
        }
        label{
          display: inline-block;
          font-size:14px;
        }
        .input{
          width: 63%;
          height: 40px;
          line-height: 40px;
          border: 1px solid #dcdfe6;
          border-radius: 3px;
          padding:0 10px;
        }
        .input::-webkit-input-placeholder{
          color:#ccc;
        }
        .input:focus{
          outline: none;
          border: 1px solid #3485fb;
        }
        .input:disabled{
          cursor: not-allowed;
        }
        .btn{
          padding:10px 20px;
          background: #3485fb;
          color:#fff;
        }
        .btn-first{
          margin-left:30px;
        }
        .err-tip{
          position: absolute;
          top:10px;
          left:86%;
          font-size:14px;
          color:red;
        }
      }
    }


  }



</style>
