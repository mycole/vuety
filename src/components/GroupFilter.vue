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
  </div>
</template>

<script>
export default {
  name: "GroupFilter",
  data: function() {
    return {
      fkey: "color",
      filterList: ["red", "blue", "green", "All"],
      filter: "All"
    };
  },
  methods: {
    resultsFilter(entry) {
      if (this.filter !== "All") {
        if (entry[this.fkey] === this.filter) {
          return entry;
        }
      } else {
        return entry;
      }
    }
  },
  computed: {}
};
</script>

<style scoped>
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
</style>
