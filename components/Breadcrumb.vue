<template>
	<div>
		<!-- <p>List / {{ title }}</p> -->
		<div class="flex font-bold text-sm">
			<nuxt-link to="/" class="no-underline hover:underline">
				<p>List</p> </nuxt-link
			>&nbsp;
			<p>/ {{ title }}</p>
		</div>
	</div>
</template>
<script>
import BaseHeader from './BaseHeader.vue'
export default {
	props: ['gameTitle'],
	data() {
		return {
			title: this.gameTitle
		}
	},
	components: { BaseHeader }
}
</script>
<style scoped>
p {
	color: #273253;
}

a:hover {
	color: #273253;
}
</style>
