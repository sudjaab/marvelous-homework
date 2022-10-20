<template>
	<div>
		<BaseHeader />
		<div class="flex justify-center pt-6 pb-64 px-7 sm:px-0">
			<div class="w-full sm:w-2/4">
				<Breadcrumb :gameTitle="gameDetail.title" />
				<div class="bg-white p-7 mt-3.5">
					<img :src="gameDetail.thumbnail" class="rounded-lg w-full" />
					<div class="text-area">
						<p class="font-bold text-sm mt-5 mb-6 name">{{ gameDetail.title }}</p>
						<p class="font-medium text-sm text-gray-500">
							{{ gameDetail.description }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		gameTitle: String
	},
	onBeforeMount() {
		asyncData()
	},
	async asyncData({ $axios, params }) {
		const gameDetail = await $axios.$get(
			`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.id}`,
			{
				headers: {
					'x-rapidapi-key': '2a50aee9e6msh55cf8498c0e6c1ap1c932fjsn9403eb2b255d',
					'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
				}
			}
		)
		return { gameDetail }
	}
}
</script>
<style scoped>
.name {
	color: #273253;
}
</style>
