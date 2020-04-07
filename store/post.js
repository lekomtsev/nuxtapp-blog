const posts = [
  { title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: '1' },
  { title: 'Post 2', date: new Date(), views: 2, comments: [1, 2, 3, 4], _id: '2' },
  { title: 'Post 3', date: new Date(), views: 33, comments: [1, 2, 3], _id: '3' }
]

export const mutations = {
  remove (state, id) {
    console.log('remove form mutations')
  },

  update (state, { id, text }) {
    console.log('remove form mutations')
  }
}

export const actions = {
  fetchAdmin () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },

  remove ({ commit }, id) {
    console.log('remove form actions', id)
    commit('remove', id)
  },

  fetchAdminById ({ commit }, id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  },

  update ({ commit }, formData) {
    commit('update', formData)
  }
}
