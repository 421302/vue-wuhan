<template>
  <div class="online-test">
    <cryptology></cryptology>

  </div>

</template>
<script>
  import cryptology from 'components/cryptology/cryptology.vue';
  export default {
    components:{
      cryptology
    }

  }
</script>

<style lang="scss" scoped >
  .online-test{
    width: 100%;
    min-height: 450px;
  }



</style>
