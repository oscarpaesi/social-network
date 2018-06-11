import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const mutations = {
  'ADD_POST' (state, post) {
    state.posts.push(post)
  }
}

const actions = {
  post: ({commit}, post) => {
    commit('ADD_POST', post)
  }
}

const getters = {
  posts: state => {
    return state.posts
  },
  users: state => {
    return state.users
  },
  currentUser: state => {
    return state.currentUser
  }
}

const userA = {
  name: 'Myles Kennedy'
}

const userB = {
  name: 'Lzzy Hale'
}

export const store = new Vuex.Store({
  state: {
    posts: [],
    users: [userA, userB],
    currentUser: userA
  },
  mutations,
  actions,
  getters
})
