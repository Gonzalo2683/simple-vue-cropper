<template>
  <div>
    <item v-for="item in items" :item="item"></item>
  </div>
</template>

<script>
  import Item from 'components/Item';

  export default {
    data() {
      return {
        msg: 'El listado wrapper',
      };
    },
    components: {
      Item,
    },
    props: ['items'],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->

<!--</style>-->
