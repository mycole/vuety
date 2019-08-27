<template>
  <div>
    <div class="container">
    <table>
      <thead class="thead-dark">
        <tr>
          <th>
            <input type="checkbox" v-model="selectAll" @click="selectall">
            <i class="form-icon"></i>
          </th>
          <th>id#</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in list" v-bind:key="user.id">
          <input type="checkbox" v-model="checked" :value="user.id" @click="selectid">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.color}}</td>
          <td>{{user.point}}</td>
        </tr>
        <tr>
          <strong>Total:</strong>
          <span class="content">{{ totalMarks }}</span>
        </tr>
        <tr>{{checked}}</tr>
      </tbody>
    </table>
  </div>
  </div>
</template>




<script>
import users from "@/data/data2b.json";

export default {
  name: "GridComponentDataFiveB",
  props: ['totalMarks'],
  data: function() {
    return {
      users,
      checked: [],
      selectAll: false,
      selectID: false,
      userIDs: []
    };
  },
  methods: {
    function() {
      json => (this.users = json);
    },

    selectall() {
      this.checked = [];
      if (!this.selectAll) {
        for (let user in this.list) {
          this.checked.push(this.list[user].id);
        }
      }
    },
    selectid() {
      this.userIDs = [];
      if (this.selectID) {
        for (users in this.users) {
          this.userIds.push(this.users[users].id);
        }
      }
    }
  },
  computed: {
    list: function() {
      return this.users.filter(function(user) {
        return user.color === "blue";
        // return user.color !== "green";
      });
    },
    totalMarks: function() {
      let total = 0;
      for (let i = 0; i < this.checked.length; i++) {
        total += parseInt(this.list[i].point);
      }
      return total;
    }
  }
};

// WORKING: https://stackoverflow.com/questions/56628157/vue-populate-table-with-axios
//https://stackoverflow.com/questions/45565349/how-to-acces-external-json-file-objects-in-vue-js-app/45566350#45566350
//https://howtocreateapps.com/vue-tutorial-json/
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;

justify-content: center;
margin: 0 auto;

  width: 600px;

  border-style: solid;
  border-width: 2px;
  border-color: black;
  top: 10px;
  bottom: 10px;
}


</style>
