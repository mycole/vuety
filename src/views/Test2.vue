<template>
  <div>
  <h1> {{ msg }} </h1>

<label class="container">
<InfoTable></InfoTable>
<InfoTable></InfoTable>
<InfoTable></InfoTable>
</label>
<!-- <div class="rio">
  <input type="checkbox" v-model="checked">
{{ checked ? "yes" : "no" }}
</div>
-->
</div>
</template>

  <script>
  import InfoTable from '@/components/InfoTable.vue'


  export default {
    name: 'Test2',
    data() {
    return {
      msg: 'la casa examen dos'
    }
  },
  components: {
    InfoTable

  }
    }

</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row;
  padding-left: 20px;
  justify-content: center;

}

</style>

<!-- https://012.vuejs.org/guide/forms.html
https://vuejs.org/v2/guide/
https://vuejs.org/v2/guide/forms.html
https://vuejs.org/v2/guide/forms.html#Basic-Usage
-->
