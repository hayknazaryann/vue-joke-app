import axios from 'axios'
export default {
  namespaced: true,
  state:{
    randomJokes: [],
    searchJokes: []
  },
  getters:{
    getRandomJokes(state) {
      return state.randomJokes;
    },
    getSearchJokes(state) {
      return state.searchJokes;
    },
  },
  mutations:{
    SET_RANDOM_JOKES(state, payload) {
      state.randomJokes.unshift(payload)
    },
    SET_SEARCH_JOKES(state, payload) {
      state.searchJokes = payload.result
    }
  },
  actions:{
    async random({ commit, state }, limit = 3) {
      state.searchJokes = [];
      state.randomJokes = [];
      for (let i = 1; i <= limit; i++) {
        await axios
          .get('https://api.chucknorris.io/jokes/random')
          .then((response) => {
            if (response.status === 200) {
              commit('SET_RANDOM_JOKES', response.data)
            }
          })
          .catch((err) => {
            throw err.response;
          });
      }
    },

    async search({ commit }, keyword = '') {
      if (keyword.length >= 3) {
        await axios
          .get(`https://api.chucknorris.io/jokes/search?query=${keyword}`)
          .then((response) => {
            if (response.status === 200) {
              commit('SET_SEARCH_JOKES', response.data)
            }
          })
          .catch((err) => {
            throw err.response;
          });
      } else {
        commit('SET_SEARCH_JOKES', [])
      }
    },

  }
}
