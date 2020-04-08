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
    console.log('update form mutations')
  },

  create (state, { title, text, image }) {
    console.log('create form mutations')
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
    commit('remove', id)
  },

  update ({ commit }, formData) {
    commit('update', formData)
  },

  async create ({ commit }, { title, text, image }) {
    try {
      const fd = new FormData()
      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)

      return await this.$axios.$post('/api/post/admin', fd)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  fetchAdminById ({ commit }, id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  }
}
