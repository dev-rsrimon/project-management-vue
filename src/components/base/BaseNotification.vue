<template>
  <base-notification-message
    v-for="(notification, index) in notificationList"
    :key="index"
    :notification-messages="notification"
  />
</template>

<script>
import BaseNotificationMessage from "./BaseNotificationMessage";

export default {
  components: {
    BaseNotificationMessage
  },
  props: {
    notificationList: {
      type: Array,
      required: true
    }
  }
};
</script>
