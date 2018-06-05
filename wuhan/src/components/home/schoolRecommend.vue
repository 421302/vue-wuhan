<template>
  <div class="school-recommend">
    <div class="school-time">
      <div class="school-name">
        <h2>武汉大学</h2>
        <p>江城多山，珞珈独秀；山上有簧，武汉大学</p>
      </div>
      <div class="time-line">
        <div class="circle-line">
          <div class="arrows"></div>
          <div class="circle yiqi">
            <div class="cicle-bg"></div>
          </div>
          <div class="circle li">
            <div class="cicle-bg"></div>
          </div>
          <div class="circle san">
            <div class="cicle-bg"></div>
          </div>
          <div class="circle yong">
            <div class="cicle-bg"></div>
          </div>
        </div>
        <div class="word-group clearfix">
          <div class="word-item">
            <h2>2001年</h2>
            <p>武汉大学创建了</p>
            <p>全国第一个信息安全本科专业</p>
          </div>
          <div class="word-item">
            <h2>2003年</h2>
            <p>全国第一个形成完整的</p>
            <p>信息安全专业本、硕、博人才培养体系</p>
          </div>
          <div class="word-item">
            <h2>2001年</h2>
            <p>武汉大学创建了</p>
            <p>全国第一个信息安全本科专业</p>
          </div>
          <div class="word-item">
            <h2>2001年</h2>
            <p>武汉大学创建了</p>
            <p>全国第一个信息安全本科专业</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {


  }
</script>

<style lang="scss" scoped >
  .school-recommend{
    width:100%;
    .school-time{
      text-align: center;
      .school-name{
        padding:30px 0 50px 0;
        h2{
          font-size:28px;
          font-weight: 400;
          margin-bottom:8px;
        }
      }
      .time-line{
        width: 1000px;
        margin: 0 auto;
        position: relative;
        .circle-line{
          border-top:1px dashed #ccc;
          position: relative;
          .arrows{
            position: absolute;
            top:-10px;
            right:-11px;
            width: 0;
            border:10px solid transparent;
            border-left-color:#ccc;
          }
        }
        .circle{
          width: 20px;
          height: 20px;
          border:1px solid #3485fb;
          border-radius: 50%;
          position: absolute;
          top:-10px;
          .cicle-bg{
            position: absolute;
            top:4px;
            left:4px;
            width: 10px;
            height: 10px;
            background:#3485fb;
            border-radius: 50%;
          }
        }
        .yiqi{
          left:11%;
        }
        .li{
          left:36%;
        }
        .san{
          left:61%;
        }
        .yong{
          left:86%;
        }
      }
      .word-group{
        margin:15px 0 40px 0;
        .word-item{
          width: 25%;
          float:left;
          h2{
            color:#3485fb;
            margin-bottom:8px;
            font-weight: 400;
          }
          p{
            margin-bottom:5px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }

  }

  @media screen and (max-width: 1000px){
    .school-recommend .school-time .time-line{
        width: 100%;
      }

  }
  @media screen and (max-width: 800px){
    .school-recommend{
      width:800px;
    }

  }




</style>
