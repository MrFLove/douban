<template>
	<div>
		<m-header title="小组" :bg="true" fixed>
			<a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/share_light.png"/></a>
    </m-header>
  </div>
</template>
<script>
  import mHeader from '../../components/header'
  export default {
    name: 'group',
    components: {
    	mHeader
    }
  }
</script>