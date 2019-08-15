<template>

<div>
  <div class ="topnav">
    <ul>
      <li><router-link to='/Home'>Home</router-link></li>
            <li>  <router-link to='/HelloWorld'>HelloWorld</router-link></li>
          <li>    <router-link to='/One'>One</router-link></li>
          <li>    <router-link to='/Test1'>Test1</router-link></li>
              <li>    <router-link to='/'>Main</router-link></li>
              <li>    <router-link to='/Test2'>Test2</router-link></li>
                <li>    <router-link to='/Test3'>Test3</router-link></li>
        </ul>
    </div>
</div>

</template>

<script>
export default {
  name: 'NavLinks'

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

.topnav li {
  display: inline;
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
list-style-type: none;
}

.topnav a {
  text-decoration: none;
  color: white;
}

/* Change the color of links on hover */
.topnav li:hover {
  background-color: #ddd;
  color: white;
}


</style>
