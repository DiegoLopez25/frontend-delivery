import {createStore} from "vuex";

import auth from "./modules/auth"
import storeCategory from "./modules/storeCategory"

const store = createStore({

  state:{
    errors: [],
  },

  getters : {
    errors: state => state.errors
  },

  mutations: {
    SET_ERRORS(state, errors) {
      state.errors = errors
    }
  },

  actions: {

  },

  modules: {
    auth,
    storeCategory
  }

})

export default store;
