<script setup lang="ts">
import { useArticlesStore } from "../store/articlesStore";

const articlesStore = useArticlesStore();

const prevPage = () => {
  if (articlesStore.pagination.currentPage > 1) {
    articlesStore.changePage(articlesStore.pagination.currentPage - 1);
  }
};

const nextPage = () => {
  if (articlesStore.pagination.currentPage < articlesStore.totalPages) {
    articlesStore.changePage(articlesStore.pagination.currentPage + 1);
  }
};
</script>

<template>
		<div class="pagination">
				<button
								v-show="articlesStore.pagination.currentPage > 5"
								@click="prevPage"
								:disabled="articlesStore.pagination.currentPage <= 1"
								class="pagination__btn pagination__btn--prev-page"
				></button>

				<ul class="pagination__list">
						<li
										v-for="page in articlesStore.pagination.visiblePages"
										:key="page"
										:class="[ 'pagination__item',
										{ 'pagination__item--active': page === articlesStore.pagination.currentPage }]"
						>
								<span @click="articlesStore.changePage(page)" class="pagination__link">
										{{ page }}
								</span>
						</li>
				</ul>


				<button
								v-show="articlesStore.pagination.currentPage < articlesStore.totalPages"
								@click="nextPage"
								:disabled="articlesStore.pagination.currentPage >= articlesStore.totalPages"
								class="pagination__btn pagination__btn--next-page"
				></button>
		</div>
</template>