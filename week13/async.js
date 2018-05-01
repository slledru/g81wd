const fetch = (path) => (
  new Promise((resolve, reject) => {
    setTimeout( () => resolve(`You fetched ${path}`), 2000 )
  })
)

class API {
  async request(path) {
    const response = await fetch(path)
    return { response }
  }

  async getUsers() {
    return await this.request('/users')
  }

}

const api = new API()
api.getUsers().then(users => console.log(users))


const getPeople = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([ 'John Doe', 'Jane Doe']), 3000)
  })
}

function promise() {
  return getPeople().then(people => people[2])
}
