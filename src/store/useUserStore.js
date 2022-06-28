import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
    state: () => {
        return {
            username: ''
        }
    }
})

export default useUserStore
