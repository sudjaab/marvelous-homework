<template>
	<div>
		<div class="flex justify-center items-center my-4 mx-6 sm:my-12 sm:mx-0">
			<div
				class="flex flex-col gap-y-4 sm:w-4/5 lg:w-3/5 sm:grid sm:gap-x-5 sm:gap-y-5 sm:grid-cols-2 md:grid-cols-3"
			>
				<nuxt-link
					:to="`/detail/${game.id}`"
					v-for="(game, index) in games"
					:key="index"
					class="no-underline"
				>
					<div
						class="flex flex-row rounded-lg bg-white p-3 cursor-pointer hover:bg-zinc-200 card sm:rounded-none sm:flex-col sm:min-h-1/2"
					>
						<div class="flex justify-center mr-2.5 sm:mr-0 w-1/2 sm:w-full">
							<img :src="game.thumbnail" class="rounded-lg w-full" />
						</div>
						<div class="text-area w-1/2 sm:w-full">
							<p class="font-bold text-sm sm:mt-5 sm:mb-2 name">
								{{ game.title }}
							</p>
							<p class="font-medium text-sm text-gray-500">
								{{ game.short_description }}
							</p>
						</div>
					</div>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['gamesList'],
	data() {
		return {
			games: this.gamesList
		}
	}
}
</script>
<style scoped>
.name {
	color: #273253;
}
</style>
