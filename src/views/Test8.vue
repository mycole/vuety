<template>
  <div>
    {{ msg }}
<GridComponentDataFiveA></GridComponentDataFiveA>
<GridComponentDataFiveB></GridComponentDataFiveB>

</div>
</template>

  <script>
  import GridComponentDataFiveA from '@/components/GridComponentDataFiveA.vue'
  import GridComponentDataFiveB from '@/components/GridComponentDataFiveB.vue'

  export default {
    name: 'Test8',
    data() {
    return {


      msg: 'das Haus der Prüfung acht'
    }
  },
  components: {
    GridComponentDataFiveA,
    GridComponentDataFiveB
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
