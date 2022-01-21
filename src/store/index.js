import { createStore } from 'vuex'

export default createStore({
  state: {
    usersList: null,
  
  },

  getters: {
    GET_JSON: state => {
      return state.usersList;
    },

    GET_TAGS: state => {
      return state.tags;
    }

  },

  mutations: {
    SET_JSON(state, payload) {


      state.usersList = payload;
    },


  },
  actions: {

    async loadJson({ commit }, value) {
      const errors = [];
      await axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {

//Write response!!!
        })
        .catch(e => {
          errors.push(e);
        })
      if (errors.length !== 0) console.log(errors);
    },
    modules: {
    }
  })