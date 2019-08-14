<template>
  <div> <h1> {{ msg }} </h1></div>




</template>

  <script>

  export default {
    name: 'home',
    data() {
    return {
      msg: 'Dies ist dein vue Applikation'
    }
  }
    }

</script>

<style scoped>

h1 {
  color: red;
}

</style>
