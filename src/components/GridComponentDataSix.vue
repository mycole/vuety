<template>
  <div>
    <button
      v-for="(entry, index) in filterList"
      :item="entry"
      :key="index"
      @click="
          filter = entry;
          active = index;
        "
      :class="{ active: entry == filter }"
    >{{ entry }}</button>

    <ul class="userWrap">
      <li
        v-for="(entry, index) in users"
        v-if="resultsFilter(entry, 'color', filter)"
        :item="entry"
        :key="index"
        class="user"
      >
        <h2 class="title">{{ entry.name }}</h2>
        <span class="language">Primary Language:
          <strong>{{ entry.color }}</strong>
        </span>
      </li>
    </ul>

    ///
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
</template>




<script>
import users from "@/data/data2.json";
import GroupFilter from "@/components/GroupFilter.vue";

export default {
  name: "GridComponentDataSix",
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
        return user.color === "red";
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
  },
  components: {
    GroupFilter
  }
};

// WORKING: https://stackoverflow.com/questions/56628157/vue-populate-table-with-axios
//https://stackoverflow.com/questions/45565349/how-to-acces-external-json-file-objects-in-vue-js-app/45566350#45566350
//https://howtocreateapps.com/vue-tutorial-json/
</script>
