import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'erIOT',
    drawerVisibility: false,
    loading: false
  },
  mutations: {
    changeTitle (state, title) {
      state.title = title
    },
    toggleDrawer (state) {
      state.drawerVisibility = !state.drawerVisibility
    },
    hideLoading (state) {
      state.loading = false
    },
    showLoading (state) {
      state.loading = true
    }
  }
})

export default store