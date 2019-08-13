<template>
  <div>
  <div class="test"> <h1> {{ msg }} </h1></div>

<div class="rio">
  <input type="checkbox" v-model="checked">
{{ checked ? "yes" : "no" }}
</div>

</div>
</template>

  <script>



  export default {
    name: 'test',
    data() {
    return {
      msg: 'Kommen wir zur Codierung'
    }
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
