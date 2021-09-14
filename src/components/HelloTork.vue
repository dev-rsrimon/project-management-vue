<template>
  <div class="tork-container tork-welcome">
    <div class="tork-py-5 tork-text-center">
      <img src="@/assets/images/logo.png" class="tork-w-25" alt="Tork logo" />

      <div class="tork-my-3">
        <h2 class="tork-my-5">Welcome to Tork Vue.js Base Web App</h2>
        <p>
          This is a complete setup of Vue.js project. Here pre-included some of
          the nacessary packages and setup like: Authentications, Tork Design
          Library, notification, middleware, two layout, folder structures, vuex
          state management, iconmoon custom icons, global sass and local sass,
          dynamic navbar (simple dropdown and mega menu supported) and dashboard
          sidebar, route setup and axios
        </p>
        <button
          class="tork-btn tork-btn-primary tork-mt-5 tork-mx-3"
          @click="showModal"
        >
          Show Modal Default
        </button>
        <button class="tork-btn tork-btn-light tork-mt-5" @click="showModalTwo">
          Show Modal sm
        </button>
      </div>
    </div>
  </div>
  <base-modal
    v-if="activeModal"
    title="Default Modal...1"
    :show-modal="showModal"
  >
    <h4>thisl form wrapper</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum omnis
      adipisci nisi iusto, ea ex corrupti illum earum nostrum laudantium!
    </p>
  </base-modal>

  <base-modal
    v-if="activeModal2"
    title="Default Modal...2"
    :show-modal="showModalTwo"
    modal-size="sm"
  >
    <h4>thisl form wrapper modal two</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum omnis
      adipisci nisi iusto, ea ex corrupti illum earum nostrum laudantium!
    </p>
  </base-modal>
</template>

<script>
export default {
  data() {
    return {
      activeModal: false,
      activeModal2: false
    };
  },
  methods: {
    showModal() {
      this.activeModal = !this.activeModal;
    },
    showModalTwo() {
      this.activeModal2 = !this.activeModal2;
    }
  }
};
</script>

<style lang="scss" scoped>
.tork-welcome {
  height: calc(100vh - 192px);
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: $secondary-color;
}
</style>
