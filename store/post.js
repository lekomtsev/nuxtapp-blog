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
  }
}
