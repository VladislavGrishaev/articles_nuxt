<script setup lang="ts">
import {useArticlesStore} from "../store/articlesStore";
import CardSingle from "../components/blog/CardSingle.vue";
import Pagination from '../components/Pagination.vue'

import '../assets/styles/home.scss'

const articlesStore = useArticlesStore()

onMounted(() => {
  articlesStore.fetchBlogPosts()
})

</script>

<template>

		<section class="articles">
				<div class="container">
						<div v-if="articlesStore.isLoading">Загрузка...</div>
						<div v-else-if="articlesStore.error">Ошибка загрузки данных</div>

						<div v-else class="articles__wrap">
								<div class="articles__title-page">
										<h1>Articles</h1>
								</div>
								<div class="articles__list">
										<CardSingle
														v-for="post in articlesStore.blogPosts"
														:key="post.id"
														:post="post"
										/>
								</div>

								<Pagination/>
						</div>
				</div>
		</section>


</template>
