<template>
  <div class="card p-3">
    <div class="text-center">
      <img class="img-fluid" :src="item.logo" width="100" alt="Card image cap">
      <div class="card-body">
        <input type="checkbox" v-model="checked" :value="item.id">
        <!-- <h5 class="card-title">{{ item.standard | capitalize }}</h5> -->
        <h5>{{item.id}}</h5>
        <ul>
          <li v-for="(item, index) in item.study" :key="index">{{item.name}}</li>
        </ul>
        <h5 class="card-title">{{ item.standard }}</h5>
      </div>
      <div>
        <span
          v-for="(group, index) in item.group"
          :key="index"
          :class="`badge badge-${tags[group]}`"
        >{{ group }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // list of tags to giving each stack a different color
      tags: {
        green: "success",
        blue: "info",
        brown: "warning"
      },
      checked: []
    };
  },
  filters: {
    // this filter will can be used to capitalise words
    capitalize: item => {
      return item.toUpperCase();
    }
  },
  props: {
    // this component expects a prop of type object
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
@import "https://use.fontawesome.com/releases/v5.0.10/css/all.css";
</style>
