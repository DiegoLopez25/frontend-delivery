import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import Content from './components/Content.vue'
import axios from 'axios'

import store from "@/stores";

//Axios settings
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = "http://localhost:8080/";

axios.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {

        if (error.response.status === 422) {
            store.commit('SET_ERRORS', error.response.data.messages);
        }

        if (error.response.status === 401) {
            store.commit('auth/SET_USER_DATA', null);
            localStorage.removeItem("authToken");
            router.push('/login').then(() => {
            });
        }

        if (error.response.status === 403) {
            router.push({path: '/403'}).then(() => {
            });
        }

        if (error.response.status === 404) {
            router.push({path: '/404'}).then(() => {
            });
        }
        return Promise.reject(error);
    }
)

axios.interceptors.request.use(
    function (config) {
        config.headers.common = {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
            Accept: "application/json"
        }
        store.commit('SET_ERRORS', {});
        return config;
    }
)


const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
app.component('content', Content)

