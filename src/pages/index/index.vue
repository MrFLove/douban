<template>
  <div>
    <m-header title="豆瓣app" :bg="true" fixed>
      <a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/share_light.png"/></a>
    </m-header>
    <m-banner></m-banner>
    <div class="new_list">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import mHeader from '../../components/header'
  import mBanner from '../../components/banner'
  export default {
    name: 'index',
    components: {
      mHeader,
      mBanner
    },
    data(){
      return {
        newsData: {
          pageNumber: 1
        }
      }
    },
    created(){
      this.getNews(this.pageNumber);
    },
    methods: {
      getNews (pageNumber) {
        //http request
        let data = {
          pageSize: 10,
          pageNum: 1
        }
        this.$axios.get('/axiosapi/v2/book/1220562').then(function(res){
          console.log(res)
        })
        // this.$axios('http://www.fabao.cn/api/FABAO_WEBSITE/news/getnewslist')
      }
    }

  }
</script>