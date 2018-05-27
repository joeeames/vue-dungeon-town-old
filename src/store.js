import Vue from 'vue'
import Vuex from 'vuex'
import buildingInfo from './building/buildingReference'

Vue.use(Vuex)

const state = {
  gold: 200,
  buildings: [
    {id: 1, name: 'Inn', type: 'inn', level: 1, incomePerTurn: 20},
    {id: 2, name: 'Blacksmith', type: 'blacksmith', level: 1, incomePerTurn: 10},
    {id: 3, name: 'Lemonade Stand', type: 'lemonade', level: 1, incomePerTurn: 5}
  ]
}

const mutations = {
  addTurnIncome (state) {
    let b = buildingInfo
    console.log(b)
    let income = state.buildings.reduce((acc, bldg) => bldg.incomePerTurn + acc, 0)
    state.gold += income
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  endTurn: ({ commit }) => commit('addTurnIncome'),
  buyBuilding ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
