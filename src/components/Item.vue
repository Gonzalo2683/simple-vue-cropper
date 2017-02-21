<template>
  <li :class="{ 'removed' : item.checked }">
    <span class="checkbox">
      <input type="checkbox" v-model="item.checked">{{ item.text }}
    </span>
  </li>
  <!--<div class="hello-hijo">-->
    <!--<h1>{{ msg }}</h1>-->
  <!--</div>-->
</template>

<script>
export default {
  name: 'Item',
  data() {
    return {
      msg: 'El item individual',
    };
  },
  components: {

  },
  props: ['item'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .removed {
    color: gray;
  }

  .removed span {
    text-decoration: line-through;
  }

  li {
    list-style-type: none;
  }

  li span {
    margin-left: 5px;
  }

</style>
