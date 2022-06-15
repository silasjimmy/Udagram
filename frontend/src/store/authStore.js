import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state() {
        return {
            username: "",
            email: "",
            loggedIn: false
        }
    },
    actions: {}
})