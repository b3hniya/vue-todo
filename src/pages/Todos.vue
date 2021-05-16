<template>
  <div class="dashboard" v-on:scroll="updateScroll">
    <appbar :scrollPosition="scrollPosition">Dashboard</appbar>

    <important-task class="response-to-side" />

    <recently-task class="response-to-side" />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
