<template>
  <base-box title="电影列表" type="primary">
    <template v-slot:title-addon>
      <div
        class="text-primary"
        style="margin-left: auto; cursor: pointer"
        @click="$router.push({path: '/movies/edit', query: {id: $route.params.id}})"
        v-if="$store.state.isUserLogin">
        <i class="el-icon-edit"></i> 编辑电影
      </div>
    </template>
    <div class="movie-item" >
      <h2>{{ movie.name }} <span class="text-info">{{ movie.year }}</span></h2>
      <img :src="movie.poster" :alt="movie.name" class="movie-poster">
      <ul class="movie-meta">
        <li><label class="text-info">导演：</label> {{ movie.director }}</li>
        <li><label class="text-info">编剧：</label> 饺子 / 易巧 / 魏芸芸</li>
        <li><label class="text-info">类型：</label> {{ movie.genre }}</li>
        <li>
          <label class="text-info">评分：</label>
          <el-rate
            :value="movie.rating/2"
            disabled
            style="display: inline-block"
          ></el-rate>
          <span style="color: #ff9900">{{ movie.rating }}</span>
        </li>
        <li><label class="text-info">片长：</label>  110分钟</li>
        <li><label class="text-info">IMDB链接：</label> {{ movie.imdb_id }}</li>
      </ul>
      <div class="movie-description">
        <h3 class="text-success">{{ movie.name }}的剧情简介</h3>
        <p class="movie-description">{{ movie.description }}</p>
      </div>
    </div>
  </base-box>
</template>

<script>
import MovieService from 'services/MovieService'

export default {
  name: 'MovieDetail',
  data () {
    return {
      movie: {}
    }
  },
  async created () {
    let id = this.$route.params.id
    try {
      const response = await MovieService.getById(id)
      this.movie = response.data.movie
    } catch (error) {
      this.$message.error(`[${error.response.status}]，数据查询异常请稍后再试`)
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-item {
  padding: 0 10px;
  .movie-poster {
    width: 135px;
    height: 200px;
    float: left;
    object-fit: cover;
  }
  .movie-meta {
    list-style: none;
    margin-left: 120px;
    font-size: 14px;
    li {
      line-height: 1.5
    }
  }
  .movie-description {
    clear: both;
    text-indent: 20px;
    line-height: 1.5;
    font-size: 14px;
    h3 {
      font-weight: 400;
      padding: 0;
      margin: 0;
      text-indent: 0;
      padding-top: 10px;
    }
    p {
      margin: 0;
    }
  }
}
</style>
