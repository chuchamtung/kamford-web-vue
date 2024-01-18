<template>
  <ul id="tabs" class="inline-flex w-full px-1 pt-2 ">
    <li class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50">
      <router-link to="/" class="active_class">Home</router-link></li>
    <li class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50 border-b-2 border-blue-400 -mb-px">
      <router-link to="/login" >login</router-link>
    </li>
  </ul>
</template>
<script setup lang="ts">
</script>