<template>
  <div class="CourseSurvey">
    <div class="header"><CourseHeader></CourseHeader></div>
    <div class="Middle"><CourseMiddle></CourseMiddle></div>
    <div class="Bottom"><CourseBottom></CourseBottom></div>
  </div>
</template>

<script>
import CourseBottom from "@/components/CourseProfile/CourseBottom.vue";
import CourseHeader from "@/components/CourseProfile/CourseHeader.vue";
import CourseMiddle from "@/components/CourseProfile/CourseMiddle.vue";

export default { components: { CourseMiddle, CourseHeader, CourseBottom } };
</script>

<style></style>
