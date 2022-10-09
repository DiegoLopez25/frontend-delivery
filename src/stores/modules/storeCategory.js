import axios from "axios";

function initData() {
    return {
        id: null,
        nombre: null,
        created_at: null,
        updated_at: null
    }
}

export default {
    namespaced: true,
    state: {
        storeCategories: [],
        storeCategory: {
            id: null,
            nombre: null,
            created_at: null,
            updated_at: null
        },
        loading: false,
        notFoundRecords: false,
    },

    getters: {
        storeCategories: state => state.storeCategories,
        storeCategory: state => state.storeCategory,
        loading: state => state.loading,
        notFoundRecords: state => state.notFoundRecords,
    },

    mutations: {
        SET_STORE_CATEGORIES(state, categories) {
            state.storeCategories = categories;
        },
        SET_STORE_CATEGORY(state, categories) {
            state.storeCategory = categories;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_NOT_FOUND_RECORDS(state, notFoundRecords) {
            state.notFoundRecords = notFoundRecords;
        },
        RESET_STATE(state) {
            state.storeCategory = Object.assign(state.storeCategory, initData());
        }
    },

    actions: {
        resetState({commit}) {
            commit('RESET_STATE');
        },

        //Este metodo debe traer el listado de las categorias de tienda
        async index({commit}) {
            commit('SET_LOADING', true);

            try {
                const {data} = await axios.get('api/categorias-tiendas');
                console.log(data);

            } catch (e) {
                commit('SET_LOADING', false)
            }

        },

    }
}
