<template>
  <div class="container">
    <h2 @cambiandolo="actualizaNombre">{{ title }}</h2>
    <add-item></add-item>
    <items :items="items" @agregarItem="addItem"></items>

    <div class="footer">
      <hr>
      <change-title></change-title>
    </div>

    <div class="otro">
      <cropper></cropper>
      <cropper></cropper>
    </div>
  </div>


</template>

<script>
  import AddItem from 'components/AddItem';
  import Items from 'components/Items';
  import ChangeTitle from 'components/ChangeTitle';
  import Cropper from 'components/Cropper';

  export default {
    name: 'main',
    components: {
      AddItem,
      Items,
      ChangeTitle,
      Cropper,
    },
    data() {
      return {
        items: [
          { text: 'Bananas', checked: true },
          { text: 'Peras', checked: false },
        ],
        title: 'Estoy en main',
      };
    },
    created() {
      Event.$on('agregarItem', (texto) => {
        if (!this.existeItem(texto)) {
          this.addItem(texto);
        } else {
          alert('Ya existe el item');
        }
      });
      Event.$on('cambiandolo', (nombre) => {
        this.actualizaNombre(nombre);
      });
    },
    methods: {
      addItem(text) {
        this.items.push({
          text,
          checked: false,
        });
      },
      actualizaNombre(nombre) {
        this.title = nombre;
      },
      existeItem(obItem) {
        const coco = this.items.filter(item =>
          item.text.toLowerCase() === obItem.toLowerCase(),
        );
        return !coco;

        // console.log(coco);
        // return this.items.filter((item) => item.text.toLowerCase() == obItem.text.toLowerCase());
      },
    },

  };
</script>

<!--<style>-->

<!--</style>-->
