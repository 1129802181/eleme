<template>
<div>
  <Header :seller="seller"></Header>
  <ul class="app-tab">
    <li>
      <router-link :to="{path:'/goods'}"  active-class="activeClass">商品</router-link>
    </li>
    <li><router-link :to="{path:'/ratings'}" active-class="activeClass">评价</router-link></li>
    <li><router-link :to="{path:'/seller'}"  active-class="activeClass">商家</router-link></li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'index',
  components: {
    Header
  },
  created: function () {
    this.$http.get('/seller').then((response) => {
      this.seller = response.data.data
    })
  },
  data () {
    return {
      seller: {}
    }
  }
}
</script>

<style scoped>
  .app-tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7,17,27,.1);
  }
  .app-tab li {
    flex: 1;
  }
  /*设置router-link的a标签为block，可以使点击区域变大，不会出现只能点击汉字才能加载数据的情况*/
  .app-tab li a {
    display: block;
    font-size: 14px;
    color: rgb(77,85,93);
  }
  .activeClass {
    color: rgb(240,20,20) !important;
  }
</style>
