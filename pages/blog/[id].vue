<script setup lang="ts">
import {usePostStore} from "../../store/postStore";
import {useRoute} from "vue-router";
import {onMounted} from "vue";
import '../assets/styles/article.scss'

const postStore = usePostStore()
const route = useRoute();
const post = computed(() => postStore.post)

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
		<section class="article-card">
				<div class="container">
						<div v-if="postStore.isLoading">Загрузка...</div>
						<div v-else-if="postStore.error">
								<p>Ошибка загрузки данных</p>
						</div>
						<article v-if="postStore.post" class="article-card__item">
								<div class="article-card__wrap">
										<div class="article-card__title-page">
												<h1>{{ post.title }}</h1>
										</div>
										<div class="article-card__img-wrap" v-if="post.image">
												<img :src="post.image" alt="post"/>
										</div>
										<div class="article-card__content">
												<div class="article-card__caption">
														<p>About</p>
												</div>
												<div class="article-card__description-post">
														<p>{{ post.description }}</p>
												</div>
										</div>
								</div>
						</article>
				</div>
		</section>
</template>