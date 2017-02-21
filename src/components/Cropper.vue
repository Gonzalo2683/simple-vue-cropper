<template>

  <div id="app">
    <h2 style="margin: 0;">Vue CropperJS</h2>
    <hr/>
    <input type="file" name="image" accept="image/*"
           style="font-size: 1.2em; padding: 10px 0;"
           @change="setImage"/>
    <br/>
    <div style="max-width: 900px; display: inline-block;">
      <vue-cropper ref='cropper' :src='imgSrc' :cropBoxResizable="false" :minCropBoxWidth="minCropBoxWidth" :minCropBoxHeight="minCropBoxHeight" alt="Source Image"></vue-cropper>
    </div>
    <!--<img :src="cropImg" style="width: 200px; height: 150px; border: 1px solid gray" alt="Cropped Image" />-->
    <br/>

    <button @click="rotate" v-if="imgSrc != ''">Rotate</button>
    <button @click="fullWidth">width</button>
    <button @click="fullHeight">height</button>
    <button @click="zoom">Zoom</button>


  </div>

</template>

<script>
  import VueCropper from 'vue-cropperjs';


  export default {
    components: {
      VueCropper,
    },
    data() {
      return {
        imgSrc: '',
        cropImg: '',
        minCropBoxWidth: 100,
        minCropBoxHeight: 100,
        zoomRatio: 0.1,
      };
    },
    methods: {
      setImage(e) {
        const file = e.target.files[0];

        if (!file.type.includes('image/')) {
          // alert('Please select an image file');
          return;
        }

        if (typeof FileReader === 'function') {
          const reader = new FileReader();

          reader.onload = (event) => {
            // console.log(event, 'event');
            this.imgSrc = event.target.result;
            // rebuild cropperjs with the updated source
            // console.log(this.$refs.cropper);
            this.$refs.cropper.replace(event.target.result);
            this.setCropBoxSizing();
          };

          reader.readAsDataURL(file);
        } else {
          alert('Sorry, FileReader API not supported');
        }
      },
      cropImage() {
        // get image data for post processing, e.g. upload or setting image src
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      },
      rotate() {
        // guess what this does :)
        this.$refs.cropper.rotate(90);
      },
      getContainerDatas() {
        return this.$refs.cropper.getContainerData();
      },
      fullWidth() {
        const datass = this.getContainerDatas();
        this.minCropBoxWidth = datass.width;
        this.$refs.cropper.setCropBoxData({ width: datass.width });
      },
      fullHeight() {
        const datass = this.getContainerDatas();
        this.minCropBoxHeight = datass.height;
        this.$refs.cropper.setCropBoxData({ height: datass.height });
      },
      setCropBoxSizing() {
        console.log('llegue');
        this.fullHeight();
        this.fullWidth();
      },
      zoom() {
        this.$refs.cropper.zoom(this.zoomRatio);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
