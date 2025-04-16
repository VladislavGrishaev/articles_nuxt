<script setup lang="ts">
</script>

<template>
	<div class="pagination">
			<button style="display: none" type="button" class="pagination__btn pagination__btn--prev-page"></button>
			<ul class="pagination__list">
					<li class="pagination__item pagination__item--active">
							<a href="#" class="pagination__link">1</a>
					</li>
					<li class="pagination__item">
							<a href="#" class="pagination__link">2</a>
					</li>
					<li class="pagination__item pagination__item--active">
							<a href="#" class="pagination__link">1</a>
					</li>
					<li class="pagination__item">
							<a href="#" class="pagination__link">2</a>
					</li>
					<li class="pagination__item">
							<a href="#" class="pagination__link">2</a>
					</li>
			</ul>
			<button type="button" class="pagination__btn pagination__btn--next-page"></button>
	</div>
</template>