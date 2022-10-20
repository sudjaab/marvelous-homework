<template>
	<div>
		<BaseHeader />
		<Card :gamesList="games" />
		<!-- <p v-for="(game, index) in games" :key="index">{{ game.title }}</p> -->
	</div>
</template>

<script>
export default {
	props: {
		gamesList: Array
	},
	onBeforeMount() {
		asyncData()
	},

	async asyncData({ $axios }) {
		const games = await $axios.$get(
			'https://free-to-play-games-database.p.rapidapi.com/api/games',
			{
				headers: {
					'x-rapidapi-key': '2a50aee9e6msh55cf8498c0e6c1ap1c932fjsn9403eb2b255d',
					'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
				}
			}
		)

		return { games }
	}
}
</script>

<style></style>
