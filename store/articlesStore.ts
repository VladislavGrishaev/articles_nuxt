import { defineStore } from 'pinia'
import type { BlogPost } from '../types/blog'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    blogPosts: [] as BlogPost[],
    isLoading: false,
    error: '' as string
  }),

  actions: {
    async fetchBlogPosts() {
      this.isLoading = true
      try {
        const response = await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
        this.blogPosts = await response.json()
      }
      catch (e: any) {
        this.error = e.message || 'Ошибка при загрузке данных постов'
        console.log(e.message)
      }
      finally {
        this.isLoading = false
      }
    }
  }
})
