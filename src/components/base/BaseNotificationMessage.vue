<template>
  <div>
    <div
      :class="
        `notification tork-alert ${notificationMessages.type} ${notificationMessages.view}`
      "
    >
      <p class="tork-alert-text">{{ notificationMessages.text }}</p>
      <button
        type="button"
        class="notification__close-btn tork-btn"
        @click="closeAlert(notificationMessages)"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    notificationMessages: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeOut: null
    };
  },
  created() {
    this.timeOut = setTimeout(() => {
      this.closeAlert(this.notificationMessages);
    }, 4000);
  },
  beforeUnmount() {
    clearTimeout(this.timeOut);
  },
  methods: {
    ...mapMutations({
      closeAlert: "notification/remove"
    })
  }
};
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notification__close-btn {
  display: inline-block;
  line-height: 0;
  padding: 0;
  font-size: 1.6rem;
  margin-left: 1rem;
}

.left {
  left: 20px;
}
.right {
  right: 20px;
}
.center {
  left: 50%;
  transform: translateX(-50%);
}

.top {
  top: 20px;
}

.bottom {
  bottom: 20px;
}

.success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}

.error {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}

.warning {
  color: #664d03;
  background-color: #fff3cd;
  border-color: #ffecb5;
}


</style>
