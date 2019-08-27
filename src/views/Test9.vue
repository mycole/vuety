<template>
  <div>
    {{ msg }}
    <div class="top"></div>

    <div class="playingGrid">
      <Populate></Populate>
    </div>
  </div>
</template>



  <script>
import Populate from "@/components/Populate.vue";

export default {
  name: "Test8",
  data() {
    return {
      msg: "das Haus der Prüfung acht"
    };
  },
  components: {
    Populate
  },
  methods: {
    sort() {
      // this.ul = _.orderBy(container, ["totalMarks"], ["desc"]);
      //   _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
      // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
    }
  },
  computed: {
    Marks() {
      return this.$refs.group.reduce((prev, curr) => prev + curr.totalMarks, 0);
    }
  }
};
</script>

<style scoped>
.playingGrid {
  display: flex;
}
</style>

<!-- https://012.vuejs.org/guide/forms.html
https://vuejs.org/v2/guide/
https://vuejs.org/v2/guide/forms.html
https://vuejs.org/v2/guide/forms.html#Basic-Usage
-->
