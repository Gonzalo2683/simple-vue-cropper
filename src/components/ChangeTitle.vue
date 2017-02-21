<template>
  <div class="hello-hijo">
    <h1>{{ msg }}</h1>
    <input type="text" class="form-control" v-model="nuevoNombre" @keyup="cambiando">
  </div>
</template>

<script>
  import Vue from 'vue';

  window.Event = new Vue();
  export default {
    data() {
      return {
        msg: 'Change Title',
        nuevoNombre: '',
      };
    },
    components: {},
    methods: {
      cambiando() {
        Event.$emit('cambiandolo', this.nuevoNombre);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->

<!--</style>-->
