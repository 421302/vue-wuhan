<template>
  <div class="ace-editor">
    <my-location></my-location>
    <div class="wrap">
      <div class="bar">
        <!--按钮-->
        <button class="btn-left" @click="test()" :disabled="!content" :class="{'notAllow':!content}">测试</button>
        <button class="btn-right" @click="submit()" :disabled="!content" :class="{'notAllow':!content}">提交</button>
        <!--配色-->
        <el-select v-model="colors" class="select" @change="optionChange()">
          <el-option
            v-for="item in blendent"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <!--语言-->
        <el-select v-model="languages" class="select" @change="optionChange2()">
          <el-option
            v-for="item in languageList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <editor v-model="content" @init="editorInit" lang="html" theme="twilight" class="ace"  :class="{'color-bright':colors}"></editor>
      <div class="editor-middle clearfix" v-if="show">
        <div class="word">终端-西普教育</div>
        <button class="btn" @click="closeTerminal">关闭终端</button>
      </div>
      <textarea class="editor-out" :class="{'color-bright':colors}" v-model.trim="textareas" v-if="show" readonly></textarea>
    </div>
    </div>
  </div>
</template>

<script>
  import myLocation from 'base/myLocation/myLocation';
  import axios from 'axios';
  export default {
    data(){
      return{
        content:"",
        colors:0,
        languages:"1",
        textareas:"123",
        show:true,
        blendent: [{
          value: 0,
          label: '暗色系'
        },{
          value: 1,
          label: '亮色系'
        }],
        languageList: [{
          value: '1',
          label: 'java'
        },{
          value: '2',
          label: 'python'
        },{
          value: '3',
          label: 'c'
        },{
          value: '4',
          label: 'c++'
        }],
      }
    },
    components:{
      myLocation,
      editor: require('vue2-ace-editor'),
    },
    methods:{
      //ace-editor配置
      editorInit() {
        require('brace/mode/html');
        require('brace/theme/twilight');
        require('brace/ext/language_tools'); //language extension prerequsite...
        require('brace/mode/html');
        require('brace/mode/javascript');    //language
      },
      //配色切换
      optionChange(){
          console.log(this.colors);
      },
      //语言切换
      optionChange2(){
        console.log(this.language);
      },
      //关闭终端
      closeTerminal(){
        this.show = false;
      },
      //测试
      test(){
        let params = {"color":this.colors,"languages":this.languages,"content":this.content};
        axios.post('/lookCode',params)
          .then((res)=>{
            console.log(res.data);
              this.textareas = res.data.a;
          })

      },
      //提交
      submit(){
        let params = {"color":this.colors,"languages":this.languages,"content":this.content};
        axios.post('/lookCode',params)
          .then((res)=>{
            console.log(res.data);
            this.textareas = res.data.a;
          })

      },
    },

    }
</script>

<style lang="scss" scoped >
  .ace-editor{
    width:100%;
    .wrap{
      padding: 30px 20px 10px 20px;
      .bar{
        padding:10px;
        margin-bottom:10px;
        background: #3485fb;
        border-radius: 5px;
        .btn-left{
          height: 40px;
          border-radius: 10px 0 0 10px;
          padding:0 10px;
          background: #fff;
          cursor: pointer;
        }
        .btn-right{
          height: 40px;
          border-radius: 0 10px 10px 0;
          padding:0 10px;
          background: #fff;
          cursor: pointer;
        }
        .select{
          width: 96px;
          float:right;
          margin-left:10px;
        }
      }
      .ace{
        width:100%;
        min-height:250px;
        background: black;
        font-size:18px;
        color:#fff;
        position: relative;
      }
      .editor-middle{
        padding:10px 0;
        .word{
          float:left;
        }
        .btn{
          float:right;
          color:red;

        }
      }
      .editor-out{
        width: 100%;
        min-height:250px;
        background: black;
        font-size:18px;
        color:#fff;
        padding:10px;
        resize:none;
      }
      .color-bright{
        background: #ccc;
        color:#000;
      }
      .notAllow{
        cursor: not-allowed!important;
      }

    }

  }



</style>
