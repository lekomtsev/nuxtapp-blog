export const mutations = {
  remove (state, id) {
    console.log('remove form mutations')
  }
}

export const actions = {
  fetchAdmin () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: 'Post 1', date: new Date(), views: 22, comment: [1, 2], _id: Math.random() },
          { title: 'Post 2', date: new Date(), views: 2, comment: [1, 2, 3, 4], _id: Math.random() },
          { title: 'Post 3', date: new Date(), views: 33, comment: [1, 2, 3], _id: Math.random() }
        ])
      }, 1000)
    })
  },

  remove ({ commit }, id) {
    console.log('remove form actions', id)
    commit('remove', id)
  }
}
