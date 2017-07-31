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
        this.$axios.get('/list/api/FABAO_WEBSITE/news/getnewslist',{
          params:{
            'pageSize': 7,
            'pageNumber': 4
          }
        })
        .then(function(response){
          console.log(response);
        })
        .catch(function(err){
          console.log(err);
        });
        
        


         // http://www.fabao.cn/api/FABAO_WEBSITE/news/getnewslist?nonce=1494326633000&pageSize=7&pageNumber=143
      }
    }

  }
</script>