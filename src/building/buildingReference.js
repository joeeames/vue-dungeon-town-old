export default {
  inn: {
    type: 'inn',
    name: 'Inn',
    cost: 150,
    upgradeCost:150,
    calculateIncome () {
      return 20
    }
  },
  blacksmith: { 
    type: 'blacksmith',
    name: 'Blacksmith',
    cost: 50,
    upgradeCost: 50,
    calculateIncome () {
      return 30
    }
  },
  lemonadestand: { 
    type: 'lemonadestand',
    name: 'Lemonade Stand',
    cost: 20,
    upgradeCost: 15,
    calculateIncome () {
      return 5;
    } 
  },
  temple: { 
    type: 'temple',
    name: 'Temple',
    calculateIncome () {
      return 30
    },
    cost: 300,
    upgradeCost: 250
  }
}
