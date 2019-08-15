<template>
    <div>

      <table>
        <thead class="thead-dark">
                      <tr>
                          <th>id#</th>
                          <th>Full Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="user in users" :key="user.email">
                          <td>{{user.id}}</td>
                          <td>{{user.name}}</td>
                          <td>{{user.email}}</td>
                          <td>{{user.phone}}</td>
                      </tr>
                  </tbody>
    </table>
    </div>
</template>




<script>
import axios from "axios"

      export default{
        name: "GridComponent",
          data: function (){
              return{
                  users: []
              }
          },
          mounted: function() {
          axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            this.users = response.data
          })

            }
          }

// WORKING: https://stackoverflow.com/questions/56628157/vue-populate-table-with-axios
//https://stackoverflow.com/questions/45565349/how-to-acces-external-json-file-objects-in-vue-js-app/45566350#45566350
//https://howtocreateapps.com/vue-tutorial-json/
</script>
