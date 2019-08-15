<template>
    <div class="table-responsive">
        <table class="table-hover" v-if="data">
            <thead>
                <tr>
                    <th>Business</th>
                    <th>Founder</th>

                    <!-- and so on -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, idx) in archivelist" v-bind:key="item.id">
                    <td>{{ item.businessName }}></td>
                    <td>{{ item.founderName }}></td>

                    <!-- and so on -->
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default {
  name: 'GridComponent',
  data() {
    return {
        data: null
    };
},

mounted() {
    this.getData();

},

methods: {
    getData() {
        // vue-resource example
        this.$http.get('data.json', {responseType: 'json'}).then(response => {
            return response.json();
        }).then(jsonData => {
            this.data = JSON.parse(jsonData);
        }).catch(e => {
            console.log('Error', e);
        });
    }
}

  }

</script>
