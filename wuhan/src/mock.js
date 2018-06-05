

const Mock = require('mockjs');
const Random = Mock.Random;
Random.extend({
  colleges: ['计算机学院','机械学院','电气学院','互联网学院','服装设计学院'],
  majors: ['软件专业','机制专业','艺术设计专业','生物专业','英语专业'],
  classs: ['100班','101班','102班','103班','104班'],
  college: function(){
    return this.pick(this.colleges)
  },
  major: function(){
    return this.pick(this.majors)
  },
  class: function(){
    return this.pick(this.classs)
  }
});
Random.college();
Random.major();
Random.class();

let A = [{
  img:"./20170405140841_62063.jpg",
  name:"密码学技术1",
  course:"计算机基础",
  teacherName:"李老师",
  link:"http://www.baidu.com"
},{
  img:"./20170405140841_62063.jpg",
  name:"密码学技术2",
  course:"计算机基础",
  teacherName:"李老师",
  link:"www.baidu.com"
},{
  img:"./20170405140841_62063.jpg",
  name:"密码学技术2",
  course:"计算机基础",
  teacherName:"李老师",
  link:"www.baidu.com"
},{
  img:"./20170405140841_62063.jpg",
  name:"密码学技术2",
  course:"计算机基础",
  teacherName:"李老师",
  link:"www.baidu.com"
},{
  img:"./20170405140841_62063.jpg",
  name:"密码学技术2",
  course:"计算机基础",
  teacherName:"李老师",
  link:"www.baidu.com"
}];

let B = [{
    name:"金老师1",
    recommend:"金as来得及佛奥克斯没地方金as来得及佛奥克斯没地方默哀京东方sad批发价视频的飞机奥四方精创是打飞机奥迪附近爱丽丝打飞机阿里斯顿甲方哦啊发给家咯展示的快捷方式的甲方默哀京东方sad批发价视频的飞机奥四方精创是打飞机奥迪附近爱丽丝打飞机阿里斯顿甲方哦啊发给家咯展示的快捷方式的甲方"
  },{
    name:"金老师2",
    recommend:"金as来得及佛奥克斯没方发给家咯展示的快捷方式的甲方默哀京东方sad批发价视频的飞机奥四方精创是打飞机奥迪附近爱丽丝打飞机阿里斯顿甲方哦啊发给家咯展示的快捷方式的甲方"
  },{
  name:"师2",
  recommend:"金as来得及佛奥克斯没方啊发给家咯展示的快捷方式的甲方"
},{
  name:"金老师2",
  recommend:"金as来得及佛奥克斯没方发给家咯展示的快捷方式的甲方默哀京东方sad批发价视频的飞机奥四方精创是打飞机奥迪附近爱丽丝打飞机阿里斯顿甲方哦啊发给家咯展示的快捷方式的甲方"
},{
  name:"金老师9",
  recommend:"金as来得丽丝打飞机阿里斯顿甲方哦啊发给家咯展示的快捷方式的甲方"
},{
  name:"金",
  recommend:"金as来得及佛奥克斯没方发给家咯展示的快捷方式的甲方默哀京东方sad批发价视频的飞机奥四方精创是打飞机奥迪附近爱丽丝打飞机阿里斯顿甲方哦啊发给家咯展示的快捷方式的甲方"
},{
  name:"金师2",
  recommend:"金as来得及佛奥克斯发给家咯展示的快捷方式的甲方"
},{
  name:"金老师33",
  recommend:"金as来得及佛奥克甲方默哀式的甲方"
}];
//首页--课程列表
Mock.mock('/courseList','get',A);
//首页--推荐老师
Mock.mock('/teachersRecommend','get',B);
//登录
Mock.mock('/login','post',{a:"登录成功"});
//密码学-DES算法详解
Mock.mock('/enVisible','get',{a:"123546"});
//密码学-DES算法查看网页源码
Mock.mock('/lookCode','post',{a:"不知所谓"});
