<template>
  <div>
    {{ msg }}
<GridComponentDataTwo></GridComponentDataTwo>
<GridComponentDataTwo></GridComponentDataTwo>

</div>
</template>

  <script>
  import GridComponentDataTwo from '@/components/GridComponentDataTwo.vue'


  export default {
    name: 'Test5',
    data() {
    return {


      msg: 'das Haus der Prüfung vier'
    }
  },
  components: {
    GridComponentDataTwo

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
