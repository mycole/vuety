<template>
  <div id="app">
    <NavLinks></NavLinks>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js Apps"/>

<!-- <ul>
  <li><router-link to='/Home'>Home</router-link></li>
  <li>    <router-link to='/HelloWorld'>HelloWorld</router-link>  </li>
  <li>    <router-link to='/One'>One</router-link>  </li>
  <li>    <router-link to='/Test1'>Test1</router-link>  </li>
</ul>
-->
<router-view/>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import NavLinks from '@/components/NavLinks.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    NavLinks
  }
  }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

}
</style>
