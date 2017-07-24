<template>
  <div>
    <m-header title="书影音" fixed>
      <a href="javascript:;" slot="left" @click="goBack"><img class="m-icon-img margin-right-10" src="../../assets/images/back_active.png"/></a>
      <a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/share_active.png"/></a>
    </m-header>
    <div class="m_content">
      <ul>
        <router-link to="bva/book">
          <li class="m_bvalist">
            <h3>BOOK</h3>
          </li>
        </router-link>
        <router-link to="bva/video">
          <li class="m_bvalist">
            <h3>VIDEO</h3>
          </li>
        </router-link>
        <router-link to="bva/music">
          <li class="m_bvalist">
            <h3>MUSIC</h3>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<style>
  .m_bvalist{
    height: 150px;
    background: center center / cover;
    margin-top: 15px;
  }
  .m_bvalist h3{
    font-size: 30px;
    color: #fff;
    margin-top: 10px;
    margin-left: 20px;
  }
  ul a:nth-child(1) .m_bvalist{
    background-image: url(../../assets/images/bva_list_book.png);
  }
  ul a:nth-child(2) .m_bvalist{
    background-image: url(../../assets/images/bva_list_video.png);
  }
  ul a:nth-child(3) .m_bvalist{
    background-image: url(../../assets/images/bva_list_music.png);
  }
</style>
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