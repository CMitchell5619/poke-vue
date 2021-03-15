import Axios from 'axios'

export const pokemonApi = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  timeout: 8000
})

export const setBearer = function(bearer) {
  pokemonApi.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  pokemonApi.defaults.headers.authorization = ''
}
