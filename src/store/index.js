import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [
      {
        name: "Account 1",
        number: "1234",
        balance: 123,
        transactions: [
          {
            from: "Account 1",
            to: "Account 3",
            amount: 100,
          },
          {
            from: "Account 1",
            to: "Account 3",
            amount: 100,
          },
        ]
      },
      {
        name: "Account 3",
        number: "4321",
        balance: 123,
        transactions: [
          {
            from: "Jon",
            to: "Adam 3",
            amount: 100,
          },
          {
            from: "Account 1",
            to: "Account 3",
            amount: 100,
          },
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
