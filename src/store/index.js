import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '@/db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    user: null,
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
            memo: "",
            date: "",
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
    ...vuexfireMutations,
  },
  actions: {
    bindTodos: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('user', db.collection('users').doc("3hqzYxgnoBforZJuQjon"))
    }),
  },
  modules: {
  }
})


