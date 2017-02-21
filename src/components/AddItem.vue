<template>
  <div>
    <div class="input-group">
      <input type="text" class="input form-control" placeholder="añada" v-model="nuevoItem">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="agregaItem">Agregar</button>
      </span>
    </div>
  </div>
  <!--<div class="hello-hijo">-->
  <!--<h1>{{ msg }}</h1>-->
  <!--</div>-->
</template>

<script>
  import Vue from 'vue';

  window.Event = new Vue();
  export default {
    data() {
      return {
        msg: 'Añadiendo',
        nuevoItem: '',
      };
    },
    components: {},

    methods: {
      agregaItem() {
        Event.$emit('agregarItem', this.nuevoItem);
        this.nuevoItem = '';
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->

<!--</style>-->
