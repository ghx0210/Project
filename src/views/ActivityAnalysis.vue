<template>
  <div class="ActiveAnalysis">
    <div class="header"><ActiveHeader></ActiveHeader></div>
    <div class="bottom"><ActiveBottom></ActiveBottom></div>
  </div>
</template>

<script>
import ActiveBottom from "@/components/Activeanalysis/ActiveBottom.vue";
import ActiveHeader from "@/components/Activeanalysis/ActiveHeader.vue";

export default { components: { ActiveHeader, ActiveBottom } };
</script>

<style scoped lang="scss"></style>
