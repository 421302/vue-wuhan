<template>
  <div class="home">
    <!--banner位-->
    <banner></banner>
    <!--学校介绍-->
    <school-recommend></school-recommend>
    <!--教学工作-->
    <teach-work></teach-work>
    <!--热门课程-->
    <hot-course></hot-course>
    <!--授课大咖-->
    <good-teacher></good-teacher>
  </div>
</template>

<script>
  import banner from 'components/home/banner.vue';
  import schoolRecommend from 'components/home/schoolRecommend.vue';
  import teachWork from 'components/home/teachWork.vue';
  import hotCourse from 'components/home/hotCourse.vue';
  import goodTeacher from 'components/home/goodTeacher.vue';
  export default {
      components:{
        banner,
        schoolRecommend,
        teachWork,
        hotCourse,
        goodTeacher,
      }

  }
</script>

<style lang="scss" scoped >
  .home{
    width: 100%;
    min-height: 450px;
  }


</style>
