import config from '../config'
import TokenHelpers from "./token-helpers";


const AuthApiService = {
  getPostToEdit(postId) {
    return fetch(`${config.API_ENDPOINT}/EditPost`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenHelpers.getAuthToken()}`,
      },
      body: JSON.stringify({ postId }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

}

export default AuthApiService