<template>
<div>
  <label class="container">
<CheckBox></CheckBox>
<CheckBox></CheckBox>
<CheckBox></CheckBox>
</label>


<label class="container">
<CheckBoxBind></CheckBoxBind>
<CheckBoxBind></CheckBoxBind>
<CheckBox></CheckBox>
</label>



</div>
</template>



<script>
import CheckBox from '@/components/CheckBox.vue'
import CheckBoxBind from '@/components/CheckBoxBind.vue'

export default {
      name: "InfoTable",
      components:{
        CheckBox,
        CheckBoxBind
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
