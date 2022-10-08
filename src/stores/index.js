import {createStore} from "vuex";

import auth from "./modules/auth"

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
    auth
  }

})

export default store;
