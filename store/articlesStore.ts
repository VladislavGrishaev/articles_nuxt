import {defineStore} from 'pinia'
import type {BlogPost} from '../types/blog'
import type {PaginationParams} from '../types/pagination'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    blogPosts: [] as BlogPost[],
    isLoading: false,
    error: '' as string,
    pagination: {
      currentPage: 1,
      perPage: 8,
      visiblePages: []
    } as PaginationParams
  }),

  actions: {
    async fetchBlogPosts() {
      this.isLoading = true
      try {
        const response = await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')

        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`)
        }

        this.blogPosts = await response.json()

        await nextTick()
        this.updateVisiblePages()
      }
      catch (e: any) {
        this.error = e.message || 'Ошибка при загрузке данных постов'
        this.blogPosts = []
        console.log(e.message)
      } finally {
        this.isLoading = false
      }
    },

    changePage(page: number) {
      this.pagination.currentPage = page;

      if (!this.pagination.visiblePages.includes(page)) {
        this.updateVisiblePages();
      }
    },

    updateVisiblePages() {
      const currentPage = this.pagination.currentPage
      const totalPages = this.totalPages
      const maxVisible = 5
      const chunkIndex = Math.floor((currentPage - 1) / maxVisible)
      const startPage = chunkIndex * maxVisible + 1
      const endPage = Math.min(startPage + maxVisible - 1, totalPages)

      this.pagination.visiblePages = Array
        .from({ length: endPage - startPage + 1 })
        .map((_, i) => startPage + i)
    }



  },
  getters: {
    paginationPosts(state) {
      const start = (state.pagination.currentPage - 1) * state.pagination.perPage
      const end = start + state.pagination.perPage
      return state.blogPosts.slice(start, end)
    },

    totalPages(state) {
      return Math.ceil(state.blogPosts.length / state.pagination.perPage)
    }
  }

})
