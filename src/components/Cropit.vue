<template>
  <div class="image-editor">
    <div class="cropit-preview"></div>
  </div>
</template>

<script>
  import Cropit from '../directives/Cropit';

  export default {
    directives: {
      Cropit,
    },
    data() {
      return {
        imageState: {
          src: 'http://lorempixel.com/500/400/',
        },
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cropit-preview {
    background-color: #f8f8f8;
    background-size: cover;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 7px;
    width: 250px;
    height: 250px;
  }

  .cropit-preview-image-container {
    cursor: move;
  }

  .image-size-label {
    margin-top: 10px;
  }

  input, .export {
    display: block;
  }

  button {
    margin-top: 10px;
  }

</style>
