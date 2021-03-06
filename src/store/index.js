import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'
import stage from './stage'

Vue.use(Vuex)

const state = {
  user: ls.getItem('user'),
  auth: ls.getItem('auth')
}

const mutations = {
  UPDATE_USER (state, user) {
    state.user = user
    ls.setItem('user', user)
  }
  /*
    UPDATE_AUTH(state, user) {
        state.auth = auth
        ls.setItem('auth', auth)
    }
    */
}

const actions = {
  login ({ commit }, user) {
    if (user) commit('UPDATE_USER', user)
    commit('UPDATE_AUTH', true)
    router.push('/dashboard')
  },
  logout ({ commit }) {
    commit('UPDATE_AUTH', false)
    router.push({ name: 'Home', params: { logout: true } })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,

  modules: {
    stage
  }
})

export default store

// export default {
//   namespaced: true,
//   state,
//   getters,
//   mutations,
//   actions
// }
