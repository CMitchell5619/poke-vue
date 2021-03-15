import { AppState } from '../AppState'
import { pokemonApi } from './AxiosService'

class PokemonService {
  async getPokemon() {
    try {
      const res = await pokemonApi.get('')
      console.log(res.data)
      AppState.pokemon = res.data.results
      console.log(AppState.pokemon)
    } catch (error) {
      console.log(error)
    }
  }
}

export const pokemonService = new PokemonService()
