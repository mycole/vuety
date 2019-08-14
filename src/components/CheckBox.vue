
<div>
    <my-checkbox val="foo" v-model="componentSelectedItems">Component Foo</my-checkbox>
    <my-checkbox val="bar" v-model="componentSelectedItems">Component Bar</my-checkbox>
    component selected items: {{componentSelectedItems}}
  </div>

<script>
Vue.component('my-checkbox', {
  template: '<div><label><input type="checkbox" :value="val" v-model="checked" @change="onChange" /><slot></slot></label></div>',
  props: ['value', 'val'],
  data () {
    return {
      checkedProxy: false
    }
  },
  computed: {
	  checked: {
      get () {
        return this.value
      },
      set (val) {
        this.checkedProxy = val
      }
    }
  },
  methods: {
    onChange: function(e) {
      this.$emit('input', this.checkedProxy)
    }
  }
})

new Vue({
  el: '#app',
  data: {
    componentSelectedItems: []
  }
})
</script>
