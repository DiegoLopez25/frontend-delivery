import axios from "axios";
import router from "@/router";

export default {
    namespaced: true,

    state: {
        userData: {}
    },

    getters: {
        user: state => state.userData
    },

    mutations: {
        SET_USER_DATA(state, user) {
            state.userData = user;
        }
    },

    actions: {

        getUserData({commit}) {
            axios
                .get("auth/user")
                .then(res => {
                    commit('SET_USER_DATA', res.data.user)
                })
        },

        sendLoginRequest({commit}, data) {
            return axios
                .post("auth/login", data)
                .then(res => {
                    commit("SET_USER_DATA", res.data.user);
                    localStorage.setItem("authToken", res.data.token);
                })
        },

        sendLogoutRequest({commit}) {
            commit('SET_USER_DATA', {});
            localStorage.removeItem("authToken");
            router.push('login').then(() =>{})
            // axios
            //     .post("auth/logout")
            //     .then(() => {
            //         commit('SET_USER_DATA', {});
            //         localStorage.removeItem("authToken");
            //         router.push('login').then(() =>{})
            //     })
        }

    }
}
