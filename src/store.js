

import Vue from 'vue'
import Vuex from 'vuex'
import buildingInfo from './building/buildingReference';
import demands from './demands';
import incomeCalculator from './game/incomeCalculator';

Vue.use(Vuex);

const state = {
  gold: 30,
  buildings: [
    {id: 1, name: 'Inn', type: 'inn', level: 1, rooms: 4},
    {id: 2, name: 'Blacksmith', type: 'blacksmith', level: 1},
    {id: 3, name: 'Lemonade Stand', type: 'lemonade', level: 1}
  ]
}

const mutations = {
  addTurnIncome (state, income) {
    // let income = state.buildings.reduce((acc, bldg) => bldg.incomePerTurn + acc, 0)
    state.gold += income;
  },
  addBuilding (state, buildingType) {
    console.log('mutation adding building', state, buildingType);
    let buildingRef = buildingInfo[buildingType];
    state.buildings.push({id: state.buildings.length + 1, name: buildingRef.name, type: buildingRef.type, level: 1})
  },
  removeGold (state, amount) {
    state.gold -= amount;
  }
}

const actions = {
  endTurn ({ commit, state }) { 
    // calculate needs
    let income = 0;
    let demandResult = demands.calculateDemand(state);
    income += incomeCalculator.calculateInnIncome(state.buildings[0], demandResult);
    
    commit('addTurnIncome', income);
  },
  buyBuilding ({ commit, state }, buildingType) {
    console.log('action buy building', buildingInfo[buildingType].cost);
    commit('addBuilding', buildingType);
    commit('removeGold', buildingInfo[buildingType].cost)
  },
  failedBuyBuildingAttempt ({commit, state}) {
    console.log('not enuf moolah');
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
