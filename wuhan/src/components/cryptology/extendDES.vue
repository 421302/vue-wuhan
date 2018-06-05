<template>
  <div class="extend-DES">
    <my-location></my-location>
    <div class="wrap">

      <!------------------------左侧密钥---------------------------->
      <div class="key">
        <img class="icon" src="../../assets/left.jpg" alt="密钥图">
        <div class="inputs">
          <div class="positions word">子密钥产生过程：</div>
          <div class="positions radios">密钥：
            <template>
              <el-radio v-model="radio" label="1" class="radio">ASCII</el-radio>
              <el-radio v-model="radio" label="2" class="radio">HEX</el-radio>
            </template>
          </div>
          <div class="positions type">
            <input type="text" class="input in" v-model.trim="input.key" placeholder="请输入密钥！">
          </div>
          <button class="positions button bit" @click="bit()">比特流</button>
          <input type="text" class="positions input bit-out" v-model.trim="input.bitOut" disabled>
          <button class="positions button middle" :disabled="!input.bitOut" :class="{'button-abled':input.bitOut}" @click="middle()">等分密钥</button>
          <input type="text" class="positions input C0" v-model.trim="input.C0" disabled>
          <input type="text" class="positions input D0" v-model.trim="input.D0" disabled>
          <button class="positions button cycle-left" :disabled="!input.C0" :class="{'button-abled':input.C0}" @click="cycleLeft()">循环左移</button>
          <button class="positions button cycle-left2" :disabled="!input.D0" :class="{'button-abled':input.D0}" @click="cycleLeft2()">循环左移</button>
          <input type="text" class="positions input C1" v-model.trim="input.C1" disabled>
          <input type="text" class="positions input D1" v-model.trim="input.D1" disabled>
          <button class="positions button select-key" :disabled="(!input.C1)||(!input.D1)" :class="{'button-abled':(input.C1&&input.D1)}" @click="selectKey()">密钥选取</button>
        </div>
      </div>
      <!-------------------------右侧明文--------------------------->
      <div class="msg">
        <img class="icon" src="../../assets/right.jpg" alt="明文图">
        <div class="inputs">
          <div class="positions word">加密过程：</div>
          <div class="positions radios">密钥：
            <template>
              <el-radio v-model="radio2" label="1" class="radio">ASCII</el-radio>
              <el-radio v-model="radio2" label="2" class="radio">HEX</el-radio>
            </template>
          </div>
          <div class="positions type">
            <input type="text" class="input in" v-model.trim="input2.msg" placeholder="请输入明文！">
          </div>
          <button class="positions button bit" @click="bit2()">比特流</button>
          <input type="text" class="positions input bit-out" v-model.trim="input2.bitOut" disabled>
          <button class="positions button replaceIP" :disabled="!input2.bitOut" :class="{'button-abled':input2.bitOut}" @click="replaceIP()">初始置换IP</button>
          <input type="text" class="positions input L0" v-model.trim="input2.L0" disabled>
          <input type="text" class="positions input R0" v-model.trim="input2.R0" disabled>
          <button class="positions button replaceE" :disabled="!input2.R0" :class="{'button-abled':input2.R0}" @click="replaceE()">扩展置换E</button>
          <input type="text" class="positions input replaceE-out" v-model.trim="input2.replaceEOut" disabled>
          <input type="text" class="positions input K1" v-model.trim="input2.K1" disabled>
          <div class="positions blank"></div>
          <button class="positions button xor" :disabled="(!input2.replaceEOut)||(!input2.K1)" :class="{'button-abled':(input2.replaceEOut && input2.K1)}" @click="xor()">异或运算</button>
          <input type="text" class="positions input xor-out" v-model.trim="input2.xorOut" disabled>

          <!--__________________s-input___________________-->
          <input type="text" v-for="(item,key) in sInput" class="positions input s" :class="key"  v-model.trim="item.inputVal" :title="item.inputVal" disabled>
          <!--__________________s-btn___________________-->
          <button v-for="(item,key) in sInput" class="positions button btn" :class="[item.inputVal?'button-abled '+ key:key]"  :disabled="!item.inputVal" @click="sBtn(key)">{{key}}</button>
          <!--__________________s-input-out___________________-->
          <input type="text" v-for="(item,key) in sInputOut" class="positions input ss" :class="key"  v-model.trim="item.inputVal" :title="item.inputVal" disabled>

          <input type="text" class="positions input s-out" v-model.trim="input2.sOut" disabled>
          <button class="positions button replaceP" :disabled="!input2.sOut" :class="{'button-abled':input2.R0}" @click="replaceP()">置换P运算</button>
          <input type="text" class="positions input p-out" v-model.trim="input2.pOut" disabled>
          <button class="positions button xor2" :disabled="(!input2.L0)||(!input2.pOut)" :class="{'button-abled':(input2.L0 && input2.pOut)}" @click="xor2()">异或运算</button>
          <input type="text" class="positions input L1" v-model.trim="input2.L1" disabled>
          <input type="text" class="positions input R1" v-model.trim="input2.R1" disabled>
          <input type="text" class="positions input L15" v-model.trim="input2.L15" disabled>
          <input type="text" class="positions input R15" v-model.trim="input2.R15" disabled>
          <input type="text" class="positions input L16" v-model.trim="input2.L16" disabled>
          <input type="text" class="positions input R16" v-model.trim="input2.R16" disabled>
          <button class="positions button endReplace" :disabled="(!input2.L16)||(!input2.R16)" :class="{'button-abled':(input2.L16 && input2.R16)}" @click="endReplace()">终结置换</button>
          <input type="text" class="positions input end" v-model.trim="input2.end" disabled>

        </div>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
  import myLocation from 'base/myLocation/myLocation';
  export default {
    data(){
      return{
        radio:"1",
        radio2:"2",
        flag:true,
        //key--值
        input:{
          key:"",
          bitOut:"",
          C0:"",
          D0:"",
          C1:"",
          D1:"",
        },
        //msg--明文
        input2:{
          msg:"",
          bitOut:"",
          L0:"",
          R0:"",
          replaceEOut:"",
          K1:"",
          xorOut:"",
          sOut:"",
          pOut:"",
          L1:"",
          R1:"",
          L15:"",
          R15:"",
          L16:"",
          R16:"",
          end:""
        },
        //sInput  循环数据
        sInput:{
          "s1":{
            inputVal:"123456",
          },
          "s2":{
            inputVal:"",
          },
          "s3":{
            inputVal:"",
          },
          "s4":{
            inputVal:"",
          },
          "s5":{
            inputVal:"",
          },
          "s6":{
            inputVal:"",
          },
          "s7":{
            inputVal:"",
          },
          "s8":{
            inputVal:"",
          }
        },
        sInputOut:{
          "s1":{
            inputVal:"asdf",
          },
          "s2":{
            inputVal:"",
          },
          "s3":{
            inputVal:"",
          },
          "s4":{
            inputVal:"",
          },
          "s5":{
            inputVal:"",
          },
          "s6":{
            inputVal:"",
          },
          "s7":{
            inputVal:"",
          },
          "s8":{
            inputVal:"",
          }
        },
      }
    },
    components:{
      myLocation,
    },
    methods:{
      //弹窗
      _messageBox(word){
        this.$alert(word, '提示', {
          confirmButtonText: '确定',
          callback: action => {}
        });
      },
      /*****************密钥***********************/
      //比特流
      bit(){
        if(!this.input.key){
          this._messageBox("*密钥不能为空！");
          return;
        }else if(this.radio == "1"){
          console.log(this.input.key);
        }
        console.log(1);
      },
      //等分密钥
      middle(){
        console.log(3);
      },
      //循环左移
      cycleLeft(){},
      cycleLeft2(){},
      //密钥选取
      selectKey(){},
      /*****************msg**********************/
      //比特流
      bit2(){},
      //初始置换IP
      replaceIP(){},
      //扩展置换E
      replaceE(){},
      //异或运算
      xor(){},
      //s盒运算
      sBtn(key){
        console.log(key);
      },
      //置换P运算
      replaceP(){},
      //异或运算
      xor2(){},
      //终置换
      endReplace(){}
    },
  }
</script>

<style lang="scss" scoped >
  .extend-DES{
    width:1000px;
    margin:10px auto;
    border:1px solid #ccc;
    border-radius:5px;
    min-height:400px;
    .wrap{
      padding: 30px 0 10px 20px;
      overflow:hidden;

      /*****************公共*******************/
      .positions{
        position: absolute;
        top:0;
        left:0;
      }
      .icon{
        position: relative;
        top:93px;
      }
      .input{
        height: 30px;
        line-height: 30px;
        width:90%;
        padding:3px 10px;
        border:1px solid #ccc;
        border-radius: 3px;
        cursor: not-allowed;
      }
      .button{
        border:none;
        border-radius: 3px;
        background: #999;
        padding:6px 12px;
        color:#fff;
        cursor: not-allowed;

      }
      .key,.msg{
        /******文字描述******/
          .word{
            top:-8px;
            left:20px;
            font-size: 20px;
            font-weight: 600;
            margin-bottom:10px;
          }
        /***密钥格式-ASCII/HEX****/
          .radios{
            top:35px;
            left:65px;
            .radio{
              margin:5px;
            }
          }
        /*****密钥--明文输入框*******/
          .type{
            top:72px;
            left:65px;
            width: 80%;
          }
      }
      /*****************密钥*******************/
      .key{
        float:left;
        width: 46%;
        position: relative;
        .in{
          cursor:text;
        }
       /*******比特流按钮*******/
        .bit{
          top:113px;
          left:185px;
          background: #3485FB;
          cursor: pointer;
        }
       /*******比特流后输出框*******/
        .bit-out{
          top:152px;
          left:25px;
        }
       /*******等分密钥按钮*******/
        .middle{
          top:193px;
          left:178px;
        }
        /*******C0*******/
        .C0{
          top: 247px;
          left: 30px;
          width: 36%;
        }
        /*******D0*******/
        .D0{
          top: 247px;
          left: 252px;
          width: 36%;
        }
        /*******循环左移按钮*******/
        .cycle-left{
          top: 289px;
          left: 68px;
        }
       /*******循环左移2按钮*******/
        .cycle-left2{
          top: 289px;
          left: 286px;
        }
        /*******C1*******/
        .C1{
          top: 326px;
          left: 30px;
          width: 36%;
        }
        /*******D1*******/
        .D1{
          top: 326px;
          left: 252px;
          width: 36%;
        }
        .select-key{
          top: 365px;
          left: 176px;
        }
        }
      /*****************明文*******************/
      .msg{
        float:right;
        width: 54%;
        position: relative;
        .in{
          cursor:text;
          width:80%;
        }
        /*******比特流按钮*******/
        .bit{
          top:113px;
          left:198px;
          background: #3485FB;
          cursor: pointer;
        }
        /*******比特流后输出框*******/
        .bit-out{
          top:152px;
          left:28px;
          width: 80%;
        }
        /*******初始置换IP*******/
        .replaceIP{
          top:195px;
          left:185px;
        }
        /*******L0*******/
        .L0{
          top: 247px;
          left: 39px;
          width: 30%;
        }
        /*******R0*******/
        .R0{
          top: 247px;
          left: 273px;
          width: 30%;
        }
        /*******扩展置换E按钮*******/
        .replaceE{
          top:287px;
          left:315px;
        }
        /*******扩展置换E输出*******/
        .replaceE-out{
          top: 322px;
          left: 185px;
          width: 64%;
        }
        /*******空白--遮线*******/
        .blank{
          width: 5px;
          height: 11px;
          background: #fff;
          top: 352px;
          left: 355px;
        }
        /*******K1框*******/
        .K1{
          top: 363px;
          left: 216px;
          width: 50%;
        }
        /*******异或运算*******/
        .xor{
          top: 402px;
          left: 319px;
        }
        .xor-out{
          top: 443px;
          left: 198px;
          width: 60%;
        }
        /*******S盒*******/
        .s{
          width: 7%;
          top: 500px;
          padding:2px;
        }
        .ss{
          width: 7%;
          top:580px;
          padding:2px;
        }
        .btn{
          top:540px;
        }
        /*******S盒输出*******/
        .s-out{
          top: 644px;
          left: 198px;
          width: 60%;
        }
        /*******置换P按钮*******/
        .replaceP{
          top:690px;
          left:315px;
        }
        /*******置换P输出*******/
        .p-out{
          top: 732px;
          left: 198px;
          width: 60%;
        }
        /*******异或运算2*******/
        .xor2{
          top: 777px;
          left: 319px;
        }
        /*******L1*******/
        .L1{
          top: 830px;
          left: 39px;
          width: 30%;
        }
        /*******R1*******/
        .R1{
          top: 830px;
          left: 273px;
          width: 30%;
        }
        /*******L15*******/
        .L15{
          top: 1000px;
          left: 39px;
          width: 30%;
        }
        /*******R15*******/
        .R15{
          top: 1000px;
          left: 273px;
          width: 30%;
        }
        /*******L16*******/
        .L16{
          top: 1162px;
          left: 39px;
          width: 30%;
        }
        /*******R16*******/
        .R16{
          top: 1162px;
          left: 273px;
          width: 30%;
        }
        .endReplace{
          top:1280px;
          left:205px;
        }
        /*******最终结果*******/
        .end{
          top: 1320px;
          left: 52px;
          width: 72%;
        }

      }

    }

  }
  /****************js动态添加的样式********************/
  .button-abled{
    background:#3485FB!important;
    cursor: pointer!important;
  }
  .s1{
    left:190px!important;
  }
  .s2{
    left:232px!important;
  }
  .s3{
    left:274px!important;
  }
  .s4{
    left:316px!important;
  }
  .s5{
    left:358px!important;
  }
  .s6{
    left:400px!important;
  }
  .s7{
    left:442px!important;
  }
  .s8{
    left:484px!important;
  }


</style>
