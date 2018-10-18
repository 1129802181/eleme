<template>
<div>
  <h2>ratings</h2>
  <Header :seller="seller"></Header>
</div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'ratings',
  components: {
    Header
  },
  data () {
    return {
      seller: {}
    }
  },
  created: function () {
    this.$http.get('/seller').then((response) => {
      this.seller = response.data.data
    })
  }
}
</script>

<style scoped>

</style>
