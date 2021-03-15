<template>
  <div class="pokemon-component col-4">
    {{ pokemon.name }}
    <!-- <router-link></router-link> -->
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  props: {
    pokemon: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
