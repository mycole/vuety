<template>
  <div>
    {{ msg }}
<GridComponentData></GridComponentData>

</div>
</template>

  <script>
  import GridComponentData from '@/components/GridComponentData.vue'


  export default {
    name: 'Test4',
    data() {
    return {


      msg: 'das Haus der Prüfung vier'
    }
  },
  components: {
    GridComponentData

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
