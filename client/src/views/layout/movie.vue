<template>
  <el-container>
    <el-header height="50px" class="bg-primary">
      <div class="header">
        <h1>Vue+Element+Express</h1>
        <div>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link text-white"><i class="el-icon-s-tools">设置</i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="login">登录</el-dropdown-item>
              <el-dropdown-item command="movie-create">新增电影</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleCommand (routeName) {
      this.$router.push({ name: routeName })
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
}
</style>
