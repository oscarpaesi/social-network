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

const myles = {
  name: 'Myles Kennedy',
  email: 'myles.kennedy@socialnetwork.com',
  website: 'https://myleskennedy.com',
  pictureUrl: '/static/assets/users/myles.jpg',
  bio: 'Lead singer of Alter Bridge, from Orland, Florida. Currently on tour promoting my first solo album: Year of the Tiger.'
}

const lzzy = {
  name: 'Lzzy Hale',
  email: 'lzzy.hale@socialnetwork.com',
  website: 'https://www.halestormrocks.com',
  pictureUrl: '/static/assets/users/lzzy.jpg',
  bio: 'Lead singer of Halestorm, from Red Lion, Pennsylvania.'
}

export const store = new Vuex.Store({
  state: {
    posts: [],
    users: [myles, lzzy],
    currentUser: myles
  },
  mutations,
  actions,
  getters
})
