<template>
  <div>
    <img
      v-cropper="cropOptions"
      src="https://i.imgur.com/WcvkCxl.png"
      alt="jQuery Meme">
  </div>
</template>

<script>
  import Cropper from '../directives/Cropper';
  import '../../node_modules/cropper/dist/cropper.css';

  export default {
    directives: {
      Cropper,
    },
    data() {
      return {
        cropOptions: {
          viewMode: 0,
          zoomable: false,
        },
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->

<!--</style>-->
