<template>
  <div class="tork-row">
    <div class="tork-col-md-4">
      <ProgressCard />
      <TasksListCard />
      <ProgressCard />
    </div>
    <div class="tork-col-md-4">
      <TasksListCard />
      <ProgressCard />
    </div>
    <div class="tork-col-md-4">
      <Calendar />
    </div>
  </div>
</template>

<script>
import ProgressCard from "@/components/common/ProgressCard.vue";
import TasksListCard from "@/components/common/TasksListCard.vue";
import Calendar from "@/components/common/Calendar.vue";

export default {
  components: {
    ProgressCard,
    TasksListCard,
    Calendar,
  },
  name: "Home"
};
</script>
<style lang="scss" scoped></style>
