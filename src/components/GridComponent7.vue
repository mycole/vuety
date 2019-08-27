<template>
  <div>
    <div class="cardContent">
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
        <p>{{ checked }}</p>
       <!-- <p>{{ totalMarks }}</p> -->
      </div>
      <ul class="userWrap">
        <li
          v-for="(entry, index) in users"
          v-if="resultsFilter(entry, 'color', filter)"
          :item="entry"
          :key="index"
          class="user"
          v-ref:group
        >
          <input type="checkbox" v-model="checked" :value="entry.id">
          <h3>{{ entry.id }}</h3>
          <h2 class="title">{{ entry.name }}</h2>
          <span class="language">
            Primary Language:
            <strong>{{ entry.color }}</strong>
          </span>
          <span class="point">
            point:
            <strong>{{ entry.point }}</strong>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import users from "@/data/data2.json";

export default {
  name: "DataDisplay",
  data: function() {
    return {
      users,
      fkey: "color",
      filterList: ["red", "blue", "green", "All"],
      filter: "All",
      checked: []
    };
  },
  methods: {
    function() {
      json => (this.users = json);
    },
    resultsFilter(entry) {
      if (this.filter !== "All") {
        if (entry[this.fkey] === this.filter) {
          return entry;
        }
      } else {
        return entry;
      }
    },

  },
  computed: {
    totalMarks: function() {
      let total = 0;
      for (let i = 0; i < this.checked.length; i++) {
        total += parseInt(this.users[i].point);
      }
      return total;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardContent {
  display: flex;
  flex-flow: column;
  border: solid 1px black;
  flex-wrap: wrap;
  width: 600px;
}

button {
  background: #74b6cc;
  border: none;
  color: #fff;
  padding: 10px;
  margin: 5px;
}
button.active {
  background: #0089ba;
}
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
