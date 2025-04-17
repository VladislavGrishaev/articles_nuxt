import {defineStore} from 'pinia'
import type { BlogPost } from '../types/blog'


export const usePostStore = defineStore('post', {
  state: () => ({
    post: null as BlogPost | null,
    isLoading: false,
    error: '' as string
  }),
  actions: {
    async fetchPostById(id: string | number) {
      this.isLoading = true
      this.error = ''
      this.post = null

      try {
        const response = await fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`)
        this.post = await response.json()
      } catch (e: any) {
        this.error = e.message || 'Ошибка при загрузке поста'
        console.error(e)
      } finally {
        this.isLoading = false
      }
    }
  }
})