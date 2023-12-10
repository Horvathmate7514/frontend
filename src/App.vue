<script setup>
import axios from 'axios'
import EpisodeCard from './components/EpisodeCard.vue';
import {ref} from 'vue'

const episodes = ref([])
const seasonNmb = ref([])
getEpisodes()

async function getEpisodes(){
  let result = await axios.get("http://127.0.0.1:8000/api/episodes")
  // console.log(result);
  episodes.value = result.data;


  episodes.forEach(element => {
    if (!seasonNmb.value.includes(element.season)) {
      seasonNmb.value.push(element.season)
    }
  });
}
</script>

<template>
  <div class="container">
    <div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Seasons
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li v-for="nmb in seasonNmb">{{ nmb }}</li>
  </ul>
</div>

    <episode-card  v-for="episode in episodes" :episode="episode"></episode-card>
  </div>
</template>

<style scoped>

</style>
