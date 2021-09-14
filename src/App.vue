<template>
  <BaseNotification :notification-list="notifications" />
  <component :is="this.$route.meta.layout ? this.$route.meta.layout : this.$route.meta.layout === false ? 'div' :  layout">
    <router-view />
  </component>
</template>

<script>
import BaseNotification from "@/components/base/BaseNotification";
import DefautlLayout from "./layouts/Default.vue";

export default {
  components: {
    BaseNotification,
    DefautlLayout
  },
  computed: {
    notifications() {
      return this.$store.state.notification.notifications;
    },
    layout() {
      return DefautlLayout
    }
  },
};
</script>
