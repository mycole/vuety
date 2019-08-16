<template>
    <div>

      <table>
        <thead class="thead-dark">
                      <tr>
                          <th></th>
                          <th>id#</th>
                          <th>Full Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="user in users" :key="user.id">
                        <input type="checkbox" v-model="checked" :value="user.id">
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

      export default{
        name: "GridComponentData",
          data: function (){
              return{
                  users: []
              }
          },
          mounted: function() {
          fetch('data.json')    // loading data.json from public folder
          .then(r => r.json())
          .then(json => {
            this.users=json;
          },
        response => {
          console.log('error loading json:', response)
        });
        }
      }

// WORKING: https://stackoverflow.com/questions/56628157/vue-populate-table-with-axios
//https://stackoverflow.com/questions/45565349/how-to-acces-external-json-file-objects-in-vue-js-app/45566350#45566350
//https://howtocreateapps.com/vue-tutorial-json/
</script>
