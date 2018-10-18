<template>
<div>
  <div>
    <h2>我是头部{{seller.name}}</h2>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    seller: Object
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
