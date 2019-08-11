<template>
  <base-box type="primary" title="电影">
    <template v-slot:title-addon>
      <div class="filter">
        <label class="active">最新</label>
        <label>高分</label>
        <label>动作</label>
        <label>剧情</label>
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
export default {
  data () {
    return {
      movies: []
    }
  },
  created () {
    // TODO: 调用接口服务获取数据列表
    this.movies = [
      {
        id: 1,
        name: '哪吒之魔童降世',
        poster: 'http://imge.gmw.cn/attachement/jpg/site2/20190725/005056a5c18d1ea3629b18.jpg',
        rating: 8.6
      },
      {
        id: 2,
        name: '绿皮书',
        poster: 'http://n.sinaimg.cn/translate/749/w450h299/20190222/w9VE-htknpmh2184101.jpg',
        rating: 8.6
      }
    ]
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
