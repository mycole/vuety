<template>
<div>
  <label class="container">
<CheckBox></CheckBox>
<CheckBox></CheckBox>
<CheckBox></CheckBox>
</label>


</div>
</template>



<script>
import CheckBox from '@/components/CheckBox.vue'

export default {
      name: "InfoTable",
      components:{ CheckBox
}
}


</script>


<style scoped>
/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox */

.container {
  display: flex;
flex-flow: column;

position: relative;
align-content:  center;
width: 300px;

padding: 10px;
border: solid 2px black;


}


div {
  padding-left: 20px;
}



</style>
