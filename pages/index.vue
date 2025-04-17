<script setup lang="ts">
import {useArticlesStore} from "../store/articlesStore";
import CardSingle from "../components/blog/CardSingle.vue";
import Pagination from '../components/Pagination.vue'

import '../assets/styles/home.scss'

const store = useArticlesStore()

onMounted(() => {
  store.fetchBlogPosts()
})

</script>

<template>

		<section class="articles">
				<div class="container">
						<div v-if="store.isLoading">Загрузка...</div>
						<div v-else-if="store.error">Ошибка: {{ store.error }}</div>

						<div v-else class="articles__wrap">
								<div class="articles__title-page">
										<h1>Articles</h1>
								</div>
								<div class="articles__list">
										<CardSingle
														v-for="post in store.blogPosts"
														:key="post.id"
														:post="post"
										/>
								</div>

								<Pagination/>
						</div>
				</div>
		</section>


</template>
