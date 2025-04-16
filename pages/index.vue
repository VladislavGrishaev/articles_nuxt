<script setup lang="ts">
import CardSingle from "../components/blog/CardSingle.vue";
import '../assets/styles/home.scss'
</script>

<template>

		<section class="articles">
				<div class="container">
						<div class="articles__wrap">
								<div class="articles__title-page">
										<h1>Articles</h1>
								</div>
								<div class="articles__list">
										<CardSingle v-for="i in 10" :key="i"/>
								</div>

								<Pagination/>
						</div>
				</div>
		</section>


</template>
