<script setup>
import Item from './WelcomeItem.vue'
import IconTour from "@/components/icons/IconTour.vue";
//import ImageItem from "@/components/imageItem.vue";
</script>
<template>
  <Item v-for="course in courseList" :key="course.id">
    <template #icon>
      <IconTour />
    </template>
    <template #heading>
      {{ course.name }} - {{ course.id }}
    </template>
  </Item>
</template>
<script>
import {ref} from "vue";
import {ARTICLE_LIST} from "@/axios/api.js"

export default {
  data() {
    function formatDate(v) {
      return v.replace(/T|Z/g, ' ')
    }

    const getImageSrc = (imgPath, imgName) => {
      //const picModules = import.meta.globEager(${path})
      const path = (`https://kamford.app${imgPath}${imgName}`)
      return path
    }
    const courseList = ref([])

    ARTICLE_LIST().then(res => {
      console.log(res.data.data);
      courseList.value = res.data.data.CourseList
    })

    return {
      courseList, formatDate
    }
  }
};
</script>