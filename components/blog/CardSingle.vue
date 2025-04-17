<script setup lang="ts">
import type { BlogPost } from '../../types/blog'

defineProps<{
  post: BlogPost
}>()
</script>

<template>
		<NuxtLink :to="`/blog/${post.id}`" class="card-single">
				<div class="card-single__wrap">
						<div class="card-single__img-wrap">
								<img :src="post.image" alt="article" />
						</div>
						<div class="card-single__content">
								<div class="card-single__preview-description">
										<p>{{ post.preview }}</p>
								</div>
								<div class="card-single__read-more">
										<span>Read more</span>
								</div>
						</div>
				</div>
		</NuxtLink>
</template>
