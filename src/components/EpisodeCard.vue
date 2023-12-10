<template>
<div class="card float-start m-1 h-100" style="width: 18rem;">
  <img :src="episode.imageoriginal" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{episode.name}}</h5>
    <p class="card-text">{{ episode.summary }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>
<script setup>
defineProps(["episode"])
</script>
