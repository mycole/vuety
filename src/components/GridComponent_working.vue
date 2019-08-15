<template>
    <div>
        <div v-for="data in myJson" :key="data.id">{{data}}</div>
    </div>
</template>




<script>
      import json from '@/data/data.json'
      export default{
          data: function (){
              return{
                  myJson: json
              }
          }
      }
</script>
