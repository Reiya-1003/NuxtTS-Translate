<template>
  
</template>

<script lang="ts">
import Vue from 'vue'
import Axios from 'axios'

export default {
  async asyncData({ app }){
    const response = await app.Axios.get('')
  }
}
</script>
