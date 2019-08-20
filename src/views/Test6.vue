<template>
  <div>
    {{ msg }}
<GridComponentDataThree></GridComponentDataThree>
<GridComponentDataThree></GridComponentDataThree>

</div>
</template>

  <script>
  import GridComponentDataThree from '@/components/GridComponentDataThree.vue'


  export default {
    name: 'Test6',
    data() {
    return {


      msg: 'das Haus der Prüfung sechs'
    }
  },
  components: {
    GridComponentDataThree

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
