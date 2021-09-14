<template>
  <div class="main">
    <DashboardNavbar />
    <div class="d-contents">
      <slot />
    </div>
  </div>
</template>

<script>
import DashboardNavbar from '../components/layouts/DashboardNavbar.vue'

export default {
  components: {
    DashboardNavbar,
  },
  setup () {
    
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: $light-color;
  height: calc(100vh - 50px);
  margin: 25px;
  border-radius: 25px;
  padding: 30px;
  box-shadow: 0px 17px 47px 14px $shadow-color;
  border: 2px solid $white-color;
  display: flex;
}

.d-contents {
  width: calc(1005 - 280px);
  margin-left: 30px;
}
</style>