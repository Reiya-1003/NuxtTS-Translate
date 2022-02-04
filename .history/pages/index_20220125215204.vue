<template>
  <div>{{posts}}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default {
  async asyncData({ app }:any){
    const response = await app.axios.get('https://script.google.com/macros/s/AKfycbxSjnREpITlKTl9lo_uV2yqnQbzh4SH7jbAl8fN6YIHHiGWsTDl/exec?text=こんにちわ&source=ja&target=en')
    return {
      posts: response.data
    }
  }
}
</script>
