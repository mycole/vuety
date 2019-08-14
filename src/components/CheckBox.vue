<template>
<div>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</label>
</div>
</template>



<script>

export default {
  data() {
    return {
      checked: false
    }
  }
}


</script>


<style scoped>
/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox */

</style>
