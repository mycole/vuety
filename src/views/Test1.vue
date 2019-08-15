<template>
  <div>
  <h1> {{ msg }} </h1>


  <label class="big-container">

    <label class="container">
  <CheckBox></CheckBox>
  <CheckBox></CheckBox>
  <CheckBox></CheckBox>
  </label>


    <label class="container">
<CheckBox></CheckBox>
<CheckBox></CheckBox>
<CheckBox></CheckBox>
</label>




</label>
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

.big-container {
  display: flex;
  flex-flow: row;
  position: relative;
  justify-content:  center;
}



.container {
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  width: 300px;
position: relative;
align-content:  center;

}


</style>

<!-- https://012.vuejs.org/guide/forms.html
https://vuejs.org/v2/guide/
https://vuejs.org/v2/guide/forms.html
https://vuejs.org/v2/guide/forms.html#Basic-Usage
-->
