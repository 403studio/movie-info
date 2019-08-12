<template>
  <base-box type="primary" title="电影">
    <template v-slot:title-addon>
      <div class="filter">
        <label @click="orderBy('rating', $event)">最新</label>
        <label @click="orderBy('rating', $event)">高分</label>
        <label @click="filterByGenre('动作')">动作</label>
        <label @click="filterByGenre('剧情')">剧情</label>
      </div>
      <div
        class="text-success"
        style="margin-left: auto; cursor: pointer"
        @click="$router.push({name: 'movie-create'})"
        v-if="$store.state.isUserLogin">
        <i class="el-icon-plus"></i> 新增电影
      </div>
    </template>
    <div class="movie-list">
      <a
        class="movie-item"
        @click="$router.push({name: 'movie-detail', params: {id: movie.id}})"
        v-for="movie in movies"
        :key="movie.id">
        <img :src="movie.poster" :alt="movie.name" />
        <p>{{ movie. name }} <strong>{{ movie.rating }}</strong></p>
      </a>
    </div>
  </base-box>
</template>

<script>
import MovieService from 'services/MovieService'
export default {
  data () {
    return {
      movies: []
    }
  },
  async created () {
    try {
      const response = await MovieService.getAll()
      this.movies = response.data.movies
    } catch (error) {
      this.$message.error(`[${error.response.status}]，数据查询异常请稍后再试`)
    }
  },
  methods: {
    async orderBy (field, event) {
      // console.log(event.target)
      let query = `orderby=${field}`
      try {
        const response = await MovieService.getAll(query)
        this.movies = response.data.movies
      } catch (error) {
        this.$message.error(`[${error.response.status}]，数据查询异常请稍后再试`)
      }
    },
    async filterByGenre (genre, event) {
      // console.log(event.target)
      let query = `genre=${genre}`
      try {
        const response = await MovieService.getAll(query)
        this.movies = response.data.movies
      } catch (error) {
        this.$message.error(`[${error.response.status}]，数据查询异常请稍后再试`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  margin-left: 10px;
  label {
    margin-right: 10px;
    color: #9b9b9b;
    font-size: 13px;
    cursor: pointer;
    &.active {
      color: #000000;
    }
  }
}
.movie-list {
  .movie-item {
    display: block;
    margin: 10px;
    float: left;
    font-size: 13px;
    width: 114px;
    cursor: pointer;
    img {
      height: 160px;
      width: 100%;
      object-fit: cover;
    }
    p {
      text-align: center;
      strong {
        color: #e09015;
      }
    }
  }
}
</style>
