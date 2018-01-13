<template>
    <div id="main">
			<navbar></navbar>			
			<router-view></router-view>
    </div>
</template>

<script>
	import Navbar from './Navbar.vue'


  export default {
		name: 'main-content',

		data: function(){
			return{

			}
		},

		components: {
			Navbar
		}
  }
</script>

<style scoped>

</style>
