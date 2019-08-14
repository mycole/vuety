<template>
  <div>
  <h1> {{ msg }} </h1>
<CheckBox></CheckBox>
<CheckBox></CheckBox>
<CheckBox></CheckBox>
<!-- <div class="rio">
  <input type="checkbox" v-model="checked">
{{ checked ? "yes" : "no" }}
</div>
-->
</div>
</template>

  <script>
  import CheckBox from '@/components/CheckBox.vue'


  export default {
    name: 'Test',
    data() {
    return {
      msg: 'Kommen wir zur Codierung'
    }
  },
  components: {
    CheckBox
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
