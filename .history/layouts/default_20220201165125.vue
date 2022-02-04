<template>

　　<div>
        <Header/>
          <nuxt/>
       <Footer/>

     </div>
</template>


<script type="text/javascript">

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
   Header,
   Footer
  }
}
</script>