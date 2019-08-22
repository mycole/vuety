<template>
  <div>

    <ul class="userWrap">
      <li
      v-for="user in list"
      v-bind:key="user.id"
      >
        <h2 class="title">{{ user.name }}</h2>
        <span class="language">
          Primary Language:
          <strong>{{ user.color }}</strong>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import users from "@/data/data2.json";

export default {
  name: "DataDisplay",
  data: function() {
    return {
      users: users
    };
  },
  methods: {
    function() {
      json => (this.users = json);
    }
  },
  computed: {
    list: function() {
      return this.users.filter(function(user){
        return user.color === 'red'
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userWrap {
  list-style-type: none;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
}
.user {
  padding: 10px;
  margin: 1% 0;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 46%;
  text-align: left;
}
h2.title {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
}
.language {
  display: block;
  font-size: 0.9rem;
}
</style>
