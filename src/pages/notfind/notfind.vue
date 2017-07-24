<template>
	<div>
		<m-header title="未找到页面" fixed>
    </m-header>
    <div class="error_main">
      <div class="m_content">
        <h1>您访问的页面未找到，您可以做一下操作：</h1>
        <br>
        <br>
        <br>
        <br>
        <router-link to="Index">返回首页</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import mHeader from '../../components/header'
  export default {
    name: 'notfind',
    components: {
    	mHeader
    }
  }
</script>