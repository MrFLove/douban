<template>
  <div>
    <m-header title="书架" fixed>
      <a href="javascript:;" slot="left" @click="goBack"><img class="m-icon-img margin-right-10" src="../../assets/images/back_active.png"/></a>
      <a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/share_active.png"/></a>
    </m-header>
    <div class="m_content"></div>
  </div>
</template>
<script>
  import mHeader from '@/components/header'
  export default {
    name: 'book',
    components: {
      mHeader
    },
    methods: {
      goBack() {
        this.$parent.goBack();
      }
    }
  }
</script>