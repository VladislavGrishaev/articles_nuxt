<script setup lang="ts">
import {usePostStore} from "../../store/postStore";
import {useRoute} from "vue-router";
import {onMounted} from "vue";
import '../assets/styles/article.scss'

const postStore = usePostStore()
const route = useRoute();

onMounted(() => {
  if (route.params.id) {
    postStore.fetchPostById(route.params.id as string)
  }
})

watch(() => route.params.id, (newId) => {
  if (newId) {
    postStore.fetchPostById(newId as string)
  }
})



</script>

<template>
		<article v-if="postStore.post" class="article-card">
				<div class="container">
						<div class="article-card__wrap">
								<div class="article-card__title-page">
										<h1>{{ postStore.post.title }}</h1>
								</div>
								<div class="article-card__img-wrap" v-if="postStore.post.image">
										<img :src="postStore.post.image" alt="post" />
								</div>
								<div class="article-card__content">
										<div class="article-card__caption">
												<p>About</p>
										</div>
										<div class="article-card__description-post">
												<p>{{ postStore.post.description }}</p>
										</div>
								</div>
						</div>
				</div>
		</article>

		<div v-else>
				<p v-if="postStore.error">Ошибка: {{ postStore.error }}</p>
				<p v-else>Загрузка...</p>
		</div>
</template>