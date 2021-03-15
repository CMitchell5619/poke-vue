<template>
  <div class="pokemon-page container">
    <div class="row">
      <div class="col-4">
        <h1>Pokemans</h1>
        <Pokemon v-for="pokeData in state.pokemon" :key="pokeData.name" :pokemon="pokeData" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Pokemon from '../components/Pokemon.vue'
import { pokemonService } from '../services/PokemonService'

export default {
  name: 'PokemonPage',
  setup() {
    const state = reactive({
      pokemon: computed(() => AppState.pokemon)
    })
    onMounted(() => {
      pokemonService.getPokemon()
    })
    return {
      state
    }
  },
  components: {
    Pokemon
  }
}
</script>

<style lang="scss" scoped>
</style>
