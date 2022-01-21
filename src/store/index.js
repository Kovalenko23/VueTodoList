import { createStore } from 'vuex'

import UsersService from '@/services/users.service';

let state = {
  usersList: null
};

const mutations = {
  SET_JSON(state, payload) {
    state.usersList = payload;
  },
  SET_USERS_LIST(state, payload) {
    state.usersList = payload;
  },
  REMOVE_USER(state, payload) {
    state.usersList.splice(payload, 1);
  }
};

const actions = {
  async loadJson({ commit }, value) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    } catch (error) {
      return error.response.data;
    }
  },
  getUsersList({ commit }) {
    return new Promise((resolve, reject) => {
      UsersService
          .usersList()
          .then(response => {
            commit('SET_USERS_LIST', response.data);

            return resolve(response.data);
          })
          .catch(error => reject(error));
    })
  }
};

const getters = {
  GET_JSON: state => {
    return state.usersList;
  },

  GET_TAGS: state => {
    return state.tags;
  },
  getUsersList: state => state.usersList
};

export default createStore({
  state,
  mutations,
  actions,
  getters
})
