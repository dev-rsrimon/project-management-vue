export const notification = {
  namespaced: true,
  state: {
    notifications: []
  },

  mutations: {
    add(state, notification) {
      state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
      });
    },
    remove(state, notification) {
      state.notifications = state.notifications.filter(notificationItem => {
        return notificationItem.id !== notification.id;
      });
    }
  }
};
