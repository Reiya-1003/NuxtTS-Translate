<template>
  <div>{{trans}}</div>
</template>

<script lang="ts">
import Vue from 'vue'
const axios = require('axios')
const name = encodeURI('こんにちは')
export default {
  
  asyncData({params}:any){
    return axios.get(`https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=${name}&source=ja&target=en`)
    .then((res:any)=>{
      console.log(res.data)
      return { trans: res.data}
      
    })
  }
}
</script>
