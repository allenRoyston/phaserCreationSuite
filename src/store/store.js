import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appReady: false,
    isActive: false,
    progressBar: 0,
    headerIsOpen: true,
    gameData: {
      score: 0,
      level: 1,
      weapon: {type:'laser',  power:1},
      secondary: {type:'bombs', power:1},
      population: {total: 100, killed: 0}
    }
  },
  getters: {
    _appReady: state => () => state.appReady,
    _isActive: state => () => state.isActive,
    _progressBar: state => () => state.progressBar,
    _headerIsOpen: state => () => state.headerIsOpen,
    _gameData: state => () => state.gameData
  },
  mutations: {
    setAppState(state, value){
      state.appReady = value
    },
    overlay_on(state) {
      state.isActive = true;
    },
    overlay_off(state) {
      state.isActive = false;
    },
    setProgressBar(state, value){
      state.progressBar = value;
    },
    setHeader (state, value) {
      state.headerIsOpen = value
    },
    setGamedata (state, value) {
      state.gameData = value
    }
  }
})
