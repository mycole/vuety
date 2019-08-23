<template>
  <div>
    {{ msg }}
<GridComponentDataFour></GridComponentDataFour>
<GridComponentDataFour></GridComponentDataFour>

</div>
</template>

  <script>
  import GridComponentDataFour from '@/components/GridComponentDataFour.vue'


  export default {
    name: 'Test7',
    data() {
    return {


      msg: 'das Haus der Prüfung seben'
    }
  },
  components: {
    GridComponentDataFour

  }
    }

</script>

<style scoped>



</style>

<!-- https://012.vuejs.org/guide/forms.html
https://vuejs.org/v2/guide/
https://vuejs.org/v2/guide/forms.html
https://vuejs.org/v2/guide/forms.html#Basic-Usage
-->
