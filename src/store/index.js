import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import jokes from './modules/chucknorris.js'
export default new createStore({
  plugins: [
    createPersistedState()
  ],
  modules: {
    jokes
  },
})
