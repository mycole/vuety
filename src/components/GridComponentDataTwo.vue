<template>
    <div>


      <table>
        <thead class="thead-dark">
                      <tr>
                          <th>
                            <input type="checkbox" v-model="selectAll" @click="select">
                            <i class="form-icon"></i>
                          </th>
                          <th>id#</th>
                          <th>Full Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="users in users" :key="users.id">
                        <input type="checkbox" v-model="checked" :value="users.id">
                          <td>{{users.id}}</td>
                          <td>{{users.name}}</td>
                          <td>{{users.email}}</td>
                          <td>{{users.phone}}</td>
                      </tr>
                  </tbody>
    </table>
    </div>
</template>




<script>
import users from "@/data/data.json"

      export default{
        name: "GridComponentDataTwo",
        data: function() {
          return {
           users,
           checked: [],
           selectAll: false
          }
        },
        methods: {
                function() {
                    json => this.users=json;
                            },

              select() {
                        this.checked = [];
                        if (!this.selectAll) {
                          for (let users in this.users) {
                            this.checked.push(this.users[users].id);
                          }
                        }
}
}
}

// WORKING: https://stackoverflow.com/questions/56628157/vue-populate-table-with-axios
//https://stackoverflow.com/questions/45565349/how-to-acces-external-json-file-objects-in-vue-js-app/45566350#45566350
//https://howtocreateapps.com/vue-tutorial-json/
</script>
