import { createStore } from 'vuex'

import UsersService from '@/services/user.service';

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
  // async loadJson({ commit }, value) {
  //   try {
  //     const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  //   } catch (error) {
  //     return error.response.data;
  //   }
  // },
  getUsersList({ commit }, userAmount) {
    return new Promise((resolve, reject) => {
      UsersService
          .usersList(userAmount)
          .then(response => {
            commit('SET_USERS_LIST', response.data.users);

            return resolve(response.data.users);
          })
          .catch(error => reject(error));
    })
  }
};
const getters = {
//  GET_JSON: state => {
//      return state.usersList;
//    },

  getUsersList: state => state.usersList
};
export default createStore({
  state,
  mutations,
  actions,
  getters
})
