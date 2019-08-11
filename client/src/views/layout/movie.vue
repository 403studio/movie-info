<template>
  <el-container>
    <el-header height="50px" class="bg-primary">
      <div class="header">
        <h1>Vue+Element+Express</h1>
        <div>
          <template v-if="!$store.state.isUserLogin">
            <span @click="$router.push({name: 'login'})">登录</span>&nbsp;|
            <span @click="$router.push({name: 'register'})">注册</span>
          </template>
          <el-dropdown @command="handleCommand" v-else>
            <span class="el-dropdown-link text-white"><i class="el-icon-s-tools">设置</i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">退出</el-dropdown-item>
              <el-dropdown-item command="movie-create">新增电影</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <router-view class="container"></router-view>
  </el-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'setUser',
      'setToken'
    ]),
    handleCommand (routeName) {
      if (routeName === 'logout') {
        this.logout()
      } else {
        this.$router.push({ name: routeName })
      }
    },
    logout () {
      this.setUser(null)
      this.setToken('')
      this.$router.push({ name: 'movie-list' })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  color: white;
  align-items: center;
  h1 {
    margin: 2px 0;
    margin-right: auto;
  }
  span {
    cursor: pointer;
  }
}
.container {
  width: 960px;
  margin: 0 auto;
  margin-top: 10px;
}
</style>
