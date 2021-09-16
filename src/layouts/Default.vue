<template>
  <div class="main">
    <DashboardNavbar />
    <div class="d-contents">
      <DashboardHeader />
      <slot />
    </div>
  </div>
</template>

<script>
import DashboardNavbar from '../components/layouts/DashboardNavbar.vue'
import DashboardHeader from '../components/layouts/DashboardHeader.vue'

export default {
  components: {
    DashboardNavbar,
    DashboardHeader
  },
  setup () {


    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: $light-color;
  min-height: calc(100vh - 50px);
  margin: 25px;
  border-radius: 25px;
  padding: 30px;
  box-shadow: 0px 17px 47px 14px $shadow-color;
  border: 2px solid $white-color;
  display: flex;
}

.d-contents {
  width: calc(100% - 280px);
  margin-left: 30px;
}
</style>