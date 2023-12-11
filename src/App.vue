<script setup>
import axios from 'axios'
// import EpisodeCard from './components/EpisodeCard.vue';
import {ref} from 'vue'

const episodes = ref([])
const seasonNmb = ref([])
getEpisodes()

async function getEpisodes(){
  let result = await axios.get("http://127.0.0.1:8000/api/episodes")
  // console.log(result);
  episodes.value = result.data;


  episodes.value.forEach(element => {
    if (!seasonNmb.value.includes(element.season)) {
      seasonNmb.value.push(element.season)
    }
  });
}


async function episodesBySeasons(season){
  let result = await axios.get('http://127.0.0.1:8000/api/episodes/' + season)
  episodes.value = result.data
}
</script>
<template>
  <div class="container">
    <select class="form-select"  aria-label="Default select example" v-model="season"  @change="episodesBySeasons(season)">
      <option v-for="nmb in seasonNmb" :value="nmb">{{ nmb }}</option>
    </select>
    <button class="btn btn-primary" @click="getEpisodes()">All episodes</button>
   
    <div class="row ">
      <div v-for="episode in episodes" class="col-md-3">
        <div class="card mb-1" style="height: 30rem;">
          <img :src="episode.imageoriginal" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ episode.name }}</h5>
            <div>
              <span v-html="episode.summary" class="card-text"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
