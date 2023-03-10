<template>
  <div class="VisitAnalysis">
    <div class="Headpart"><VisitHeader></VisitHeader></div>
    <div class="Bottompart"><VisitBottom></VisitBottom></div>
  </div>
</template>

<script>
import VisitHeader from "@/components/VisitAnalysis/VisitHeader.vue";
import VisitBottom from "@/components/VisitAnalysis/VisitBottom.vue";

export default {
  components: {
    VisitHeader,
    VisitBottom,
  },
};
</script>

<style scoped lang="scss">
.VisitAnalysis {
  .Bottompart {
    margin-top: 30px;
    background-color: #ffffff;
  }
}
</style>
