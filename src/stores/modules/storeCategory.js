import axios from "axios";

function initData() {
   return {
      id: null,
      nombre: null,
      created_at: null,
      updated_at: null,
   };
}

export default {
   namespaced: true,
   state: {
      storeCategories: [],
      storeCategory: {
         id: null,
         nombre: null,
         created_at: null,
         updated_at: null,
      },
      loading: false,
      notFoundRecords: false,
   },

   getters: {
      storeCategories: (state) => state.storeCategories,
      storeCategory: (state) => state.storeCategory,
      loading: (state) => state.loading,
      notFoundRecords: (state) => state.notFoundRecords,
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
      },
   },

   actions: {
      resetState({ commit }) {
         commit("RESET_STATE");
      },

      //Este metodo debe traer el listado de las categorias de tienda
      async index({ commit }) {
         commit("SET_LOADING", true);

         try {
            const { data } = await axios.get("api/categorias-tiendas");

            if (data.categories.length === 0) {
               commit("SET_NOT_FOUND_RECORDS", true);
            }
            commit("SET_STORE_CATEGORIES", data.categories);
            commit("SET_LOADING", false);
         } catch (e) {
            commit("SET_LOADING", false);
         }
      },

      async edit({ commit }, id) {
         commit("SET_LOADING", true);

         try {
            const { data } = await axios.get(
               "api/categorias-tiendas/edit/" + id
            );

            commit("SET_STORE_CATEGORY", data.category);
            commit("SET_LOADING", false);
         } catch (e) {
            commit("SET_LOADING", false);
         }
      },

      store({ commit, state }) {
         return axios.post(
            "api/categorias-tiendas/create",
            state.storeCategory
         );
      },

      update({ state }) {
         // state.storeCategory._method = "PUT";
         return axios.put(
            "api/categorias-tiendas/update/" + state.storeCategory.id,
            state.storeCategory
         );
      },

      delete({}, id) {
         return axios.delete("api/categorias-tiendas/delete/" + id);
      },
   },
};
