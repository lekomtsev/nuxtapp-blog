
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
  async fetchAdmin ({ commit }) {
    try {
      return await this.$axios.get('/api/post/admin')
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  async remove ({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  },

  async update ({ commit }, { id, text }) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, { text })
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
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

  async fetchAdminById ({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/admin/${id}`)
    } catch (error) {
      commit('setError', error, { root: true })
      throw error
    }
  }
}
